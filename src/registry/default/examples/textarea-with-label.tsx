import { styled } from "styled-system/jsx";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function TextareaWithLabel() {
  return (
    <styled.div css={{ display: "grid", w: "full", gap: "3" }}>
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </styled.div>
  );
}
