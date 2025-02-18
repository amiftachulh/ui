import fs from "fs";
import path from "path";
import { type BundledLanguage } from "shiki/bundle/web";
import { css } from "styled-system/css";
import CodeBlock from "./code-block";

type ComponentSourceProps = {
  name: string;
  type: "recipe" | "slot-recipe" | "component";
};

const typeMap = {
  recipe: { dir: "panda/recipes", title: "Recipe" },
  "slot-recipe": { dir: "panda/slot-recipes", title: "Slot Recipe" },
  component: { dir: "src/components/ui", title: "Component" },
};

export default async function ComponentSource({ name, type }: ComponentSourceProps) {
  const { dir, title } = typeMap[type];
  const file = path.join(process.cwd(), dir, name);
  const extension = name.split(".")[1] as BundledLanguage;
  const content = fs.readFileSync(file, "utf8");

  return (
    <div className={css({ my: "4", borderWidth: "1", rounded: "md", overflow: "hidden" })}>
      <div className={css({ px: 4, py: 1 })}>{title}</div>
      <CodeBlock lang={extension}>{content}</CodeBlock>
    </div>
  );
}
