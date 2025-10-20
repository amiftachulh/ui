import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ForgotPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.form>) {
  return (
    <styled.form css={{ display: "flex", flexDir: "column", gap: "6", ...css }} {...props}>
      <FieldGroup>
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            gap: "1",
            textAlign: "center",
          }}
        >
          <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>Forgot Password</styled.h1>
          <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
            Enter your email to recover your account.
          </styled.p>
        </styled.div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <Button type="submit">Send Reset Link</Button>
          <FieldDescription css={{ textAlign: "center" }}>
            Back to <a href="#">Login</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </styled.form>
  );
}
