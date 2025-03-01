import { styled } from "styled-system/jsx";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      resizeDirection="horizontal"
      maxW="md"
      rounded="lg"
      borderWidth="1px"
      md={{ minW: "450px" }}
    >
      <ResizablePanel defaultSize={50}>
        <styled.div display="flex" h="200px" alignItems="center" justifyContent="center" p="6">
          <styled.span fontWeight="semibold">One</styled.span>
        </styled.div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup resizeDirection="vertical">
          <ResizablePanel defaultSize={25}>
            <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
              <styled.span fontWeight="semibold">Two</styled.span>
            </styled.div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <styled.div display="flex" h="full" alignItems="center" justifyContent="center" p="6">
              <styled.span fontWeight="semibold">Three</styled.span>
            </styled.div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
