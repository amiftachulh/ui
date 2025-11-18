import * as runtime from "react/jsx-runtime";
import fs from "fs";
import path from "path";
import { compile, run } from "@mdx-js/mdx";
import matter from "gray-matter";
import type { Heading, InlineCode, Root, Text } from "mdast";
import recmaMdxEscapeMissingComponents from "recma-mdx-escape-missing-components";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import components from "@/components/mdx-components";

const contentDir = path.join(process.cwd(), "src/contents");

export type Doc = {
  meta: Record<string, any>;
  content: React.ReactNode;
  headings: HeadingData[];
};

export async function getDocBySlug(slug: string): Promise<Doc> {
  const normalizedSlug = slug.replace(/\\/g, "/");
  const parts = normalizedSlug.split("/").filter((part) => part !== "");

  const filePath = path.join(
    contentDir,
    parts.length === 0 ? "index.mdx" : `${parts.join("/")}${parts.length === 1 ? "/index" : ""}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data: frontmatter } = matter(fileContent);

  const headings: HeadingData[] = [];

  const compiledMdx = await compile(content, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm, () => remarkHeadingsCollector(headings)],
    rehypePlugins: [rehypeMdxCodeProps],
    recmaPlugins: [recmaMdxEscapeMissingComponents],
  });

  const { default: MDXContent } = await run(compiledMdx, { ...runtime });

  return {
    meta: {
      ...frontmatter,
      slug: `/docs/${normalizedSlug}`,
    },
    content: <MDXContent components={components} />,
    headings,
  };
}

export async function getAllDocs() {
  const groups = fs.readdirSync(contentDir);
  const allDocs = [];

  for (const group of groups) {
    const groupDir = path.join(contentDir, group);

    if (fs.statSync(groupDir).isDirectory()) {
      const files = fs.readdirSync(groupDir).filter((file) => file.endsWith(".mdx"));

      for (const file of files) {
        const slug = file === "index.mdx" ? group : `${group}/${file.replace(".mdx", "")}`;
        const doc = await getDocBySlug(slug);
        allDocs.push(doc);
      }
    }
  }
  return allDocs;
}

export type HeadingData = {
  level: number;
  text: string;
  id: string;
};

function remarkHeadingsCollector(headings: HeadingData[]) {
  const idCounts = new Map<string, number>();

  return (tree: Root) => {
    visit(tree, "heading", (node: Heading) => {
      const text = node.children
        .map((child) => {
          if (child.type === "text" || child.type === "inlineCode") {
            return (child as Text | InlineCode).value;
          }
          return "";
        })
        .join(" ")
        .trim();

      if (!text) return;

      const baseId = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      const count = idCounts.get(baseId) || 0;
      const id = count === 0 ? baseId : `${baseId}-${count + 1}`;
      idCounts.set(baseId, count + 1);

      // Assign ID to heading node
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.id = id;

      // Store heading for table of contents
      headings.push({
        level: node.depth,
        text,
        id,
      });
    });
  };
}
