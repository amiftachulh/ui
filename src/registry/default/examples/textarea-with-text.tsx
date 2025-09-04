import { styled } from "styled-system/jsx";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";

export default function TextareaWithText() {
  return (
    <styled.div css={{ display: "grid", w: "full", gap: "3" }}>
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>
        Your message will be copied to the support team.
      </styled.p>
    </styled.div>
  );
}
