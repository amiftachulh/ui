import { styled } from "styled-system/jsx";
import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <styled.div css={{ w: "full", maxW: "18.75rem", mx: "3.5" }}>
      <styled.div css={{ fontWeight: "medium" }}>Radix Primitives</styled.div>
      <div>An open-source UI component library.</div>
      <Separator css={{ my: "3.5" }} />
      <styled.div css={{ display: "flex", h: "5", alignItems: "center" }}>
        <div>Blog</div>
        <Separator css={{ mx: "3.5" }} decorative orientation="vertical" />
        <div>Docs</div>
        <Separator css={{ mx: "3.5" }} decorative orientation="vertical" />
        <div>Source</div>
      </styled.div>
    </styled.div>
  );
}
