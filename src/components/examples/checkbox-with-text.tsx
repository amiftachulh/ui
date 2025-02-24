import { styled } from "styled-system/jsx";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxWithText() {
  return (
    <styled.div css={{ display: "flex", gap: "2" }}>
      <Checkbox id="terms1" />
      <styled.div css={{ display: "grid", gap: "1.5", lineHeight: "none" }}>
        <Label htmlFor="terms1">Accept terms and conditions</Label>
        <styled.p css={{ textStyle: "sm", color: "fg.muted" }}>
          You agree to our Terms of Service and Privacy Policy.
        </styled.p>
      </styled.div>
    </styled.div>
  );
}
