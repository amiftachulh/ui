import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ForgotPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
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
              minH: "500px",
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
                <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>
                  Forgot Password
                </styled.h1>
                <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
                  Enter your email to recover your account
                </styled.p>
              </styled.div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </Field>
              <Field>
                <Button type="submit">Send Reset Link</Button>
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
