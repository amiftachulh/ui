import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import { styled } from "styled-system/jsx";
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
    <styled.div css={{ rounded: "md", borderWidth: "1px", my: "4", overflow: "hidden" }}>
      <styled.div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "fg",
          borderBottomWidth: "1px",
          px: "4",
          py: "6",
        }}
      >
        <Component />
      </styled.div>
      <CodeBlock lang="tsx">{content}</CodeBlock>
    </styled.div>
  );
}
