import { styled } from "styled-system/jsx";
import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea w="48" h="72" rounded="md" borderWidth="1px">
      <styled.div p="4">
        <styled.h4 mb="4" textStyle="sm" fontWeight="medium" lineHeight="none">
          Tags
        </styled.h4>
        <styled.div divideY="1px">
          {tags.map((tag) => (
            <styled.div key={tag} py="2" textStyle="sm" _first={{ pt: "0" }} _last={{ pb: "0" }}>
              {tag}
            </styled.div>
          ))}
        </styled.div>
      </styled.div>
    </ScrollArea>
  );
}
