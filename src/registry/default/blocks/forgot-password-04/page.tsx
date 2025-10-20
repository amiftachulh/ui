import { styled } from "styled-system/jsx";
import { ForgotPasswordForm } from "@/registry/default/blocks/forgot-password-04/components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <styled.div
      css={{
        bg: "muted",
        display: "flex",
        minH: "svh",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        p: "6",
        md: { p: "10" },
      }}
    >
      <styled.div css={{ w: "full", maxW: "sm", md: { maxW: "3xl" } }}>
        <ForgotPasswordForm />
      </styled.div>
    </styled.div>
  );
}
