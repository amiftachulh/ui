import { styled } from "styled-system/jsx";
import { getRegistryComponent, getRegistryItem } from "@/lib/registry";
import CodeBlock from "./code-block";

type ComponentPreviewProps = {
  name: string;
  type?: "block" | "component" | "example";
};

export default async function ComponentPreview({ name, type }: ComponentPreviewProps) {
  const item = await getRegistryItem(name);
  const Component = await getRegistryComponent(name);

  if (type === "block") {
    return (
      <styled.div
        css={{
          pos: "relative",
          aspectRatio: "4/2.5",
          w: "full",
          overflow: "hidden",
          rounded: "md",
          borderWidth: "1px",
          md: { mx: "-1" },
        }}
      >
        <styled.div
          css={{
            bg: "bg",
            pos: "absolute",
            inset: "0",
            display: "none",
            w: "1600px",
            md: { display: "block" },
          }}
        >
          <styled.iframe src={`/view/${name}`} css={{ w: "full", h: "full" }} />
        </styled.div>
      </styled.div>
    );
  }

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
      <CodeBlock lang="tsx">{item?.files?.[0]?.content as string}</CodeBlock>
    </styled.div>
  );
}
