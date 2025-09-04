import { styled } from "styled-system/jsx";
import { Checkbox } from "@/registry/default/ui/checkbox";
import { Label } from "@/registry/default/ui/label";

export default function CheckboxDemo() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "6" }}>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "3" }}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "flex-start", gap: "3" }}>
        <Checkbox id="terms-2" defaultChecked />
        <styled.div css={{ display: "grid", gap: "2" }}>
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
            By clicking this checkbox, you agree to the terms and conditions.
          </styled.p>
        </styled.div>
      </styled.div>
      <styled.div css={{ display: "flex", alignItems: "center", gap: "3" }}>
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </styled.div>
      <Label
        css={{
          display: "flex",
          alignItems: "flex-start",
          gap: "3",
          rounded: "lg",
          borderWidth: "1px",
          p: "3",
          _hover: {
            bg: "accent/50",
          },
          "&:has([aria-checked='true'])": {
            bg: "blue.50",
            borderColor: "blue.600",
            _dark: {
              borderColor: "blue.900",
              bg: "blue.950",
            },
          },
        }}
      >
        <Checkbox
          id="toggle-2"
          defaultChecked
          css={{
            _checked: {
              bg: "blue.600",
              color: "white",
              borderColor: "blue.600",
              _dark: {
                bg: "blue.700",
                borderColor: "blue.700",
              },
            },
          }}
        />
        <styled.div css={{ display: "grid", gap: "1.5", fontWeight: "normal" }}>
          <styled.p css={{ textStyle: "sm", lineHeight: "none", fontWeight: "medium" }}>
            Enable notifications
          </styled.p>
          <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
            You can enable or disable notifications at any time.
          </styled.p>
        </styled.div>
      </Label>
    </styled.div>
  );
}
