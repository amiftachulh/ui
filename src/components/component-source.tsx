import fs from "fs";
import path from "path";
import { type BundledLanguage } from "shiki/bundle/web";
import { styled } from "styled-system/jsx";
import CodeBlock from "./code-block";

type ComponentSourceProps = {
  name: string;
  type: "recipe" | "slot-recipe" | "component" | "hook";
};

const typeMap = {
  recipe: { dir: "preset/recipes", title: "preset/recipes/" },
  "slot-recipe": { dir: "preset/slot-recipes", title: "preset/slot-recipes/" },
  component: { dir: "src/components/ui", title: "@/components/ui/" },
  hook: { dir: "src/hooks", title: "@/hooks/" },
};

export default async function ComponentSource({ name, type }: ComponentSourceProps) {
  const { dir, title } = typeMap[type];
  const file = path.join(process.cwd(), dir, name);
  const extension = name.split(".")[1] as BundledLanguage;
  const content = fs.readFileSync(file, "utf8");

  return (
    <styled.div css={{ my: "4", borderWidth: "1px", rounded: "md", overflow: "hidden" }}>
      <styled.div
        css={{
          px: "4",
          py: "1.5",
          fontFamily: "var(--global-font-mono, var(--font-mono-fallback))",
          textStyle: "sm",
        }}
      >
        {title}
        {name}
      </styled.div>
      <CodeBlock lang={extension}>{content}</CodeBlock>
    </styled.div>
  );
}
