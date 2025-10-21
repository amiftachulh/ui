import { styled } from "styled-system/jsx";
import { ResetPasswordForm } from "@/registry/default/blocks/reset-password-04/components/reset-password-form";

export default function ResetPasswordPage() {
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
        <ResetPasswordForm />
      </styled.div>
    </styled.div>
  );
}
