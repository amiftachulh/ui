import * as runtime from "react/jsx-runtime";
import fs from "fs";
import path from "path";
import { compile, run } from "@mdx-js/mdx";
import matter from "gray-matter";
import recmaMdxEscapeMissingComponents from "recma-mdx-escape-missing-components";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";
import components from "@/components/mdx-components";

const contentDir = path.join(process.cwd(), "src/contents");

export type Doc = {
  meta: Record<string, any>;
  content: React.ReactNode;
  headings: Heading[];
};

export async function getDocBySlug(slug: string): Promise<Doc> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const normalizedSlug = realSlug.replace(/\\/g, "/");
  const [group, fileSlug] = normalizedSlug.split("/");

  const groupDir = path.join(contentDir, group);
  const filePath = path.join(groupDir, `${fileSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data: frontmatter } = matter(fileContent);

  const compiledMdx = await compile(content, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeMdxCodeProps],
    recmaPlugins: [recmaMdxEscapeMissingComponents],
  });

  const { default: MDXContent } = await run(compiledMdx, { ...runtime });

  const headings = extractHeadings(fileContent);

  return {
    meta: {
      ...frontmatter,
      slug: `/docs/${realSlug}`,
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
      const slugs = fs.readdirSync(groupDir).filter((file) => file.endsWith(".mdx"));

      for (const slug of slugs) {
        const fullSlug = path.join(group, slug.replace(".mdx", "")); // Format as group/file

        const doc = await getDocBySlug(fullSlug);
        allDocs.push(doc);
      }
    }
  }
  return allDocs;
}

export type Heading = {
  level: number;
  text: string;
  id: string;
};

export function extractHeadings(content: string) {
  content = content.replace(/^---[\s\S]*?---\s*/, "");

  const tree = unified().use(remarkParse).use(remarkMdx).parse(content);

  const headings: Heading[] = [];

  function visit(node: any) {
    if (node.type === "heading") {
      const text = node.children
        .filter((child: any) => child.type === "text" || child.type === "inlineCode")
        .map((child: any) => child.value)
        .join("");

      const id = text.toLowerCase().replace(/\s+/g, "-");

      headings.push({
        level: node.depth,
        text: text.trim(),
        id,
      });
    }

    if (node.children) {
      node.children.forEach((child: any) => visit(child));
    }
  }

  visit(tree);

  return headings;
}
