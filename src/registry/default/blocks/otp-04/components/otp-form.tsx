import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Card, CardContent } from "@/registry/default/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp";

export function OTPForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div
      css={{ display: "flex", flexDirection: "column", gap: "6", md: { minH: "450px" }, ...css }}
      {...props}
    >
      <Card css={{ flex: "1", overflow: "hidden", p: "0" }}>
        <CardContent
          css={{
            display: "grid",
            flex: "1",
            p: "0",
            md: { gridTemplateColumns: "repeat(2, 1fr)" },
          }}
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
              <Field css={{ alignItems: "center", textAlign: "center" }}>
                <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>
                  Enter verification code
                </styled.h1>
                <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
                  We sent a 6-digit code to your email
                </styled.p>
              </Field>
              <Field>
                <FieldLabel htmlFor="otp" css={{ srOnly: true }}>
                  Verification code
                </FieldLabel>
                <InputOTP maxLength={6} id="otp" required containerCss={{ gap: "4" }}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <FieldDescription css={{ textAlign: "center" }}>
                  Enter the 6-digit code sent to your email.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Verify</Button>
                <FieldDescription css={{ textAlign: "center" }}>
                  Didn&apos;t receive the code? <a href="#">Resend</a>
                </FieldDescription>
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
      <FieldDescription css={{ textAlign: "center" }}>
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </styled.div>
  );
}
