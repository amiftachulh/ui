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
              gap: "1",
              textAlign: "center",
            }}
          >
            <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold" }}>
              Enter verification code
            </styled.h1>
            <styled.p css={{ color: "muted.fg", textStyle: "sm", textWrap: "balance" }}>
              We sent a 6-digit code to your email.
            </styled.p>
          </styled.div>
          <Field>
            <FieldLabel htmlFor="otp" css={{ srOnly: true }}>
              Verification code
            </FieldLabel>
            <InputOTP maxLength={6} id="otp" required>
              <InputOTPGroup
                css={{
                  gap: "2",
                  "& > [data-slot=input-otp-slot]": {
                    borderWidth: "1px",
                    rounded: "md",
                  },
                }}
              >
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup
                css={{
                  gap: "2",
                  "& > [data-slot=input-otp-slot]": {
                    borderWidth: "1px",
                    rounded: "md",
                  },
                }}
              >
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup
                css={{
                  gap: "2",
                  "& > [data-slot=input-otp-slot]": {
                    borderWidth: "1px",
                    rounded: "md",
                  },
                }}
              >
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription css={{ textAlign: "center" }}>
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>
          <Button type="submit">Verify</Button>
          <FieldDescription css={{ textAlign: "center" }}>
            Didn&apos;t receive the code? <a href="#">Resend</a>
          </FieldDescription>
        </FieldGroup>
      </form>
    </styled.div>
  );
}
