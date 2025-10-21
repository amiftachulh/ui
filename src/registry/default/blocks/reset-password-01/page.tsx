import { styled } from "styled-system/jsx";
import { ResetPasswordForm } from "@/registry/default/blocks/reset-password-01/components/reset-password-form";

export default function ResetPasswordPage() {
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
        <ResetPasswordForm />
      </styled.div>
    </styled.div>
  );
}
