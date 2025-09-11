"use client";

import { styled } from "styled-system/jsx";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable";

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      css={{ minH: "200px", maxW: "md", rounded: "lg", borderWidth: "1px", md: { minW: "450px" } }}
    >
      <ResizablePanel defaultSize={25}>
        <styled.div
          css={{
            display: "flex",
            h: "full",
            alignItems: "center",
            justifyContent: "center",
            p: "6",
          }}
        >
          <styled.span css={{ fontWeight: "semibold" }}>Header</styled.span>
        </styled.div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <styled.div
          css={{
            display: "flex",
            h: "full",
            alignItems: "center",
            justifyContent: "center",
            p: "6",
          }}
        >
          <styled.span css={{ fontWeight: "semibold" }}>Content</styled.span>
        </styled.div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
