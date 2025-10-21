import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ResetPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "6", ...css }} {...props}>
      <Card css={{ overflow: "hidden", p: "0" }}>
        <CardContent
          css={{ display: "grid", p: "0", md: { gridTemplateColumns: "repeat(2, 1fr)" } }}
        >
          <styled.form
            css={{
              display: "flex",
              flexDir: "column",
              alignItems: "center",
              justifyContent: "center",
              p: "6",
              md: { p: "8" },
            }}
          >
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
                <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>Reset Password</styled.h1>
                <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
                  Enter your new password to reset your password
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
          <styled.div
            css={{ bg: "muted", pos: "relative", display: "none", md: { display: "block" } }}
          >
            <styled.img
              src="/placeholder.svg"
              alt="Image"
              css={{
                pos: "absolute",
                inset: "0",
                w: "full",
                h: "full",
                objectFit: "cover",
                _dark: {
                  filter: "brightness(0.2) grayscale(1)",
                },
              }}
            />
          </styled.div>
        </CardContent>
      </Card>
    </styled.div>
  );
}
