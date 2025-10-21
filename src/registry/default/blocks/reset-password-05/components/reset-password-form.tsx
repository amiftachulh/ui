import { LuGalleryVerticalEnd } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ResetPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "6", ...css }} {...props}>
      <form>
        <FieldGroup>
          <styled.div
            css={{
              display: "flex",
              flexDir: "column",
              alignItems: "center",
              gap: "2",
              textAlign: "center",
            }}
          >
            <styled.a
              href="#"
              css={{
                display: "flex",
                flexDir: "column",
                alignItems: "center",
                gap: "2",
                fontWeight: "medium",
              }}
            >
              <styled.div
                css={{
                  display: "flex",
                  w: "8",
                  h: "8",
                  alignItems: "center",
                  justifyContent: "center",
                  rounded: "md",
                }}
              >
                <LuGalleryVerticalEnd size={24} />
              </styled.div>
              <styled.span css={{ srOnly: true }}>Acme Inc.</styled.span>
            </styled.a>
            <styled.h1 css={{ textStyle: "xl", fontWeight: "bold" }}>Reset Password</styled.h1>
            <FieldDescription>Enter your new password to reset your password</FieldDescription>
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
      </form>
    </styled.div>
  );
}
