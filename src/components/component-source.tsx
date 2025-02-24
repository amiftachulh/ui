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
  recipe: { dir: "preset/recipes", title: "Recipe" },
  "slot-recipe": { dir: "preset/slot-recipes", title: "Slot Recipe" },
  component: { dir: "src/components/ui", title: "Component" },
  hook: { dir: "src/hooks", title: "Hook" },
};

export default async function ComponentSource({ name, type }: ComponentSourceProps) {
  const { dir, title } = typeMap[type];
  const file = path.join(process.cwd(), dir, name);
  const extension = name.split(".")[1] as BundledLanguage;
  const content = fs.readFileSync(file, "utf8");

  return (
    <styled.div css={{ my: "4", borderWidth: "1", rounded: "md", overflow: "hidden" }}>
      <styled.div css={{ px: 4, py: 1 }}>{title}</styled.div>
      <CodeBlock lang={extension}>{content}</CodeBlock>
    </styled.div>
  );
}
