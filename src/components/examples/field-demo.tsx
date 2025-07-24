import { Field, FieldControl, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export default function FieldDemo() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <FieldControl>
        <Input type="email" placeholder="Enter your email" />
      </FieldControl>
      <FieldDescription>Stay updated with our latest news and special offers.</FieldDescription>
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  );
}
