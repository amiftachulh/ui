import { flex } from "styled-system/patterns";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDisabled() {
  return (
    <div className={flex({ align: "center", gap: "2" })}>
      <Checkbox id="terms2" disabled />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </div>
  );
}
