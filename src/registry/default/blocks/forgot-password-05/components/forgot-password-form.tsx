import { LuGalleryVerticalEnd } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import { Input } from "@/registry/default/ui/input";

export function ForgotPasswordForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
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
            <styled.h1 css={{ textStyle: "xl", fontWeight: "bold" }}>Forgot Password</styled.h1>
            <FieldDescription>Enter your email to recover your account</FieldDescription>
          </styled.div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </Field>
          <Field>
            <Button type="submit">Send Reset Link</Button>
          </Field>
        </FieldGroup>
      </form>
    </styled.div>
  );
}
