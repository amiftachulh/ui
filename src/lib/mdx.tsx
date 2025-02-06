import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
  const { data, content } = matter(fileContent);
  const headings = extractHeadings(content);

  const result = await compileMDX({
    source: content,
    components,
  });

  return {
    meta: {
      ...data,
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
