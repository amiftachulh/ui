import { styled } from "styled-system/jsx";
import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <styled.div w="full" maxW="18.75rem" mx="3.5">
      <styled.div fontWeight="medium">Radix Primitives</styled.div>
      <div>An open-source UI component library.</div>
      <Separator my="3.5" />
      <styled.div display="flex" height="5" alignItems="center">
        <div>Blog</div>
        <Separator mx="3.5" decorative orientation="vertical" />
        <div>Docs</div>
        <Separator mx="3.5" decorative orientation="vertical" />
        <div>Source</div>
      </styled.div>
    </styled.div>
  );
}
