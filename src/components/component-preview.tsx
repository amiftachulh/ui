import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import { css } from "styled-system/css";
import { center } from "styled-system/patterns";
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
    <div className={css({ rounded: "md", borderWidth: "1px", my: "4", overflow: "hidden" })}>
      <div className={center({ borderBottomWidth: "1px", p: 4, overflow: "auto" })}>
        <Component />
      </div>
      <CodeBlock lang="tsx">{content}</CodeBlock>
    </div>
  );
}
