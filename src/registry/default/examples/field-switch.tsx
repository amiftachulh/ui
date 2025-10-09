import { styled } from "styled-system/jsx";
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/registry/default/ui/field";
import { Switch } from "@/registry/default/ui/switch";

export default function FieldSwitch() {
  return (
    <styled.div css={{ w: "full", maxW: "md" }}>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <FieldDescription>
            Enable multi-factor authentication. If you do not have a two-factor device, you can use
            a one-time code sent to your email.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </styled.div>
  );
}
