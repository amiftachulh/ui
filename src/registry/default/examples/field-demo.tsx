import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

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
