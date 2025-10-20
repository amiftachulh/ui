import { styled } from "styled-system/jsx";
import { ForgotPasswordForm } from "@/registry/default/blocks/forgot-password-01/components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <styled.div
      css={{
        display: "flex",
        minH: "svh",
        w: "full",
        alignItems: "center",
        justifyContent: "center",
        p: "6",
        md: { p: "10" },
      }}
    >
      <styled.div css={{ w: "full", maxW: "sm" }}>
        <ForgotPasswordForm />
      </styled.div>
    </styled.div>
  );
}
