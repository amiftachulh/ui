import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ResetPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.form>) {
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
          <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>Reset Password</styled.h1>
          <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
            Enter your new password to reset your password.
          </styled.p>
        </styled.div>
        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>Must be at least 8 characters long</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>Please confirm your password</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Reset Password</Button>
        </Field>
      </FieldGroup>
    </styled.form>
  );
}
