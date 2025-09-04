"use client";

import { styled } from "styled-system/jsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/default/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
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
          <styled.span css={{ fontWeight: "semibold" }}>Sidebar</styled.span>
        </styled.div>
      </ResizablePanel>
      <ResizableHandle withHandle />
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
