import { styled } from "styled-system/jsx";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function LabelDemo() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </styled.div>
  );
}
