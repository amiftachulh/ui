import { styled } from "styled-system/jsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableWithHandle() {
  return (
    <ResizablePanelGroup
      resizeDirection="horizontal"
      minH="200px"
      maxW="md"
      rounded="lg"
      borderWidth="1px"
      md={{ minW: "450px" }}
    >
      <ResizablePanel defaultSize={25}>
        <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
          <styled.span fontWeight="semibold">Sidebar</styled.span>
        </styled.div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
          <styled.span fontWeight="semibold">Content</styled.span>
        </styled.div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
