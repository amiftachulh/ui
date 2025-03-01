import { styled } from "styled-system/jsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup
      resizeDirection="vertical"
      minH="200px"
      maxW="md"
      rounded="lg"
      borderWidth="1px"
      md={{ minW: "450px" }}
    >
      <ResizablePanel defaultSize={25}>
        <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
          <styled.span fontWeight="semibold">Header</styled.span>
        </styled.div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
          <styled.span fontWeight="semibold">Content</styled.span>
        </styled.div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
