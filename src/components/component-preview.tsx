import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import { css } from "styled-system/css";
import CodeBlock from "./code-block";

type ComponentPreviewProps = {
  name: string;
};

const dir = path.join(process.cwd(), "src/components/examples");

export default async function ComponentPreview({ name }: ComponentPreviewProps) {
  const file = path.join(dir, `${name}.tsx`);
  const content = fs.readFileSync(file, "utf8");
  const Component = dynamic(() => import(`./examples/${name}`));

  return (
    <div className={css({ my: "4", borderWidth: "1px", rounded: "md", overflow: "hidden" })}>
      <div className={css({ p: 4, borderBottomWidth: "1", overflow: "auto" })}>
        <Component />
      </div>
      <CodeBlock lang="tsx">{content}</CodeBlock>
    </div>
  );
}
