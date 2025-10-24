import { Checkbox } from "@/registry/default/ui/checkbox";
import { Field, FieldLabel } from "@/registry/default/ui/field";

export function FieldCheckbox() {
  return (
    <FieldLabel htmlFor="checkbox-demo">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-demo" defaultChecked />
        <FieldLabel htmlFor="checkbox-demo" css={{ lineClamp: "1" }}>
          I agree to the terms and conditions
        </FieldLabel>
      </Field>
    </FieldLabel>
  );
}
