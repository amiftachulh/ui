import fs from "fs";
import path from "path";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import CodeBlock from "./code-block";

type BlockPreviewProps = {
  name: string;
};

const dir = path.join(process.cwd(), "src/registry/default/blocks/");

export default async function BlockPreview({ name }: BlockPreviewProps) {
  const file = path.join(dir, `${name}.tsx`);
  let content = fs.readFileSync(file, "utf8");

  content = content
    .replace(/@\/registry\/default\/ui\//g, "@/components/ui/")
    .replace(/@\/registry\/default\//g, "@/");

  return (
    <styled.div css={{ spaceY: "2" }}>
      <styled.div
        css={{
          pos: "relative",
          aspectRatio: "4/2.5",
          w: "full",
          overflow: "hidden",
          rounded: "md",
          borderWidth: "1px",
        }}
      >
        <styled.div
          css={{
            pos: "absolute",
            inset: "0",
            display: "none",
            w: "1600px",
            bg: "bg",
            md: { display: "block" },
          }}
          className="absolute inset-0 hidden w-[1600px] bg-background md:block"
        >
          <styled.iframe src={`/view/${name}`} css={{ w: "full", h: "full" }} />
        </styled.div>
      </styled.div>

      <CodeBlock className={css({ borderWidth: "1px", rounded: "md" })} lang="tsx">
        {content}
      </CodeBlock>
    </styled.div>
  );
}
