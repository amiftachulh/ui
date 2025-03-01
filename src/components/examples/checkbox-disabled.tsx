import { styled } from "styled-system/jsx";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDisabled() {
  return (
    <styled.div display="flex" alignItems="center" gap="2">
      <Checkbox id="terms2" disabled />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </styled.div>
  );
}
