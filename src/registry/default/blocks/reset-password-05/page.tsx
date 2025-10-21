import { styled } from "styled-system/jsx";
import { ResetPasswordForm } from "@/registry/default/blocks/reset-password-05/components/reset-password-form";

export default function ForgotPasswordPage() {
  return (
    <styled.div
      css={{
        bg: "bg",
        display: "flex",
        minH: "svh",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "6",
        p: "6",
        md: { p: "10" },
      }}
    >
      <styled.div css={{ w: "full", maxW: "sm" }}>
        <ResetPasswordForm />
      </styled.div>
    </styled.div>
  );
}
