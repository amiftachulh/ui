import { styled } from "styled-system/jsx";
import { OTPForm } from "@/registry/default/blocks/otp-05/components/otp-form";

export default function OTPPage() {
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
        <OTPForm />
      </styled.div>
    </styled.div>
  );
}
