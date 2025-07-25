import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithButton() {
  return (
    <styled.div css={{ display: "grid", w: "full", gap: "2" }}>
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </styled.div>
  );
}
