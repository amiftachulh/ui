import { styled } from "styled-system/jsx";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/default/ui/field";
import { Textarea } from "@/registry/default/ui/textarea";

export default function FieldTextarea() {
  return (
    <styled.div css={{ w: "full", maxW: "md" }}>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea id="feedback" placeholder="Your feedback helps us improve..." rows={4} />
            <FieldDescription>Share your thoughts about our service.</FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </styled.div>
  );
}
