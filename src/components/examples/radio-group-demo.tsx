import { styled } from "styled-system/jsx";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </styled.div>
    </RadioGroup>
  );
}
