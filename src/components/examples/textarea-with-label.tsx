import { styled } from "styled-system/jsx";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithLabel() {
  return (
    <styled.div display="grid" w="full" gap="1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </styled.div>
  );
}
