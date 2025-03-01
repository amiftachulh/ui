import { styled } from "styled-system/jsx";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaWithText() {
  return (
    <styled.div display="grid" w="full" gap="1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <styled.p textStyle="sm" color="muted.fg">
        Your message will be copied to the support team.
      </styled.p>
    </styled.div>
  );
}
