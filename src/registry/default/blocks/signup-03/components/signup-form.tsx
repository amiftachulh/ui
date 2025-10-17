import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function SignupForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "6", ...css }} {...props}>
      <Card>
        <CardHeader css={{ textAlign: "center" }}>
          <CardTitle css={{ textStyle: "xl" }}>Create your account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input id="name" type="text" placeholder="John Doe" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </Field>
              <Field>
                <Field css={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4" }}>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription css={{ textAlign: "center" }}>
                  Already have an account? <a href="#">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription css={{ px: "6", textAlign: "center" }}>
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </styled.div>
  );
}
