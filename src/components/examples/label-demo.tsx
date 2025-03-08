import { styled } from "styled-system/jsx";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </styled.div>
  );
}
