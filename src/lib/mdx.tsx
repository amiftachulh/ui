import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";
import components from "@/components/mdx-components";

const contentDir = path.join(process.cwd(), "src/contents");

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

export async function getDocBySlug(slug: string): Promise<{
  meta: Record<string, any>;
  content: React.ReactNode;
  headings: Heading[];
}> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const [group, fileSlug] = realSlug.split("/");

  const groupDir = path.join(contentDir, group);
  const filePath = path.join(groupDir, `${fileSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const result = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeMdxCodeProps],
      },
    },
  });

  const headings = extractHeadings(fileContent);

  return {
    meta: {
      ...result.frontmatter,
      slug: realSlug,
    },
    content: result.content,
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
