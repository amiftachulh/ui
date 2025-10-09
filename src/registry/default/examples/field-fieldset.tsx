import { styled } from "styled-system/jsx";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export default function FieldFieldset() {
  return (
    <styled.div css={{ w: "full", maxW: "md", spaceY: "6" }}>
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>We need your address to deliver your order.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <styled.div
            css={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "4" }}
          >
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </styled.div>
        </FieldGroup>
      </FieldSet>
    </styled.div>
  );
}
