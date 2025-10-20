import { LuGalleryVerticalEnd } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/registry/default/ui/field";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/default/ui/input-otp";

export function OTPForm({ css, ...props }: React.ComponentProps<typeof styled.div>) {
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
            <styled.h1 css={{ textStyle: "xl", fontWeight: "bold" }}>
              Enter verification code
            </styled.h1>
            <FieldDescription>We sent a 6-digit code to your email address</FieldDescription>
          </styled.div>
          <Field>
            <FieldLabel htmlFor="otp" css={{ srOnly: true }}>
              Verification code
            </FieldLabel>
            <InputOTP maxLength={6} id="otp" required containerCss={{ gap: "4" }}>
              <InputOTPGroup
                css={{
                  gap: "2.5",
                  "& > [data-slot=input-otp-slot]": {
                    w: "12",
                    h: "16",
                    borderWidth: "1px",
                    rounded: "md",
                    textStyle: "xl",
                  },
                }}
              >
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup
                css={{
                  gap: "2.5",
                  "& > [data-slot=input-otp-slot]": {
                    w: "12",
                    h: "16",
                    borderWidth: "1px",
                    rounded: "md",
                    textStyle: "xl",
                  },
                }}
              >
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription css={{ textAlign: "center" }}>
              Didn&apos;t receive the code? <a href="#">Resend</a>
            </FieldDescription>
          </Field>
          <Field>
            <Button type="submit">Verify</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription css={{ px: "6", textAlign: "center" }}>
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </styled.div>
  );
}
