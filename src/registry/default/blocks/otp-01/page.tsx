import { styled } from "styled-system/jsx";
import { OTPForm } from "@/registry/default/blocks/otp-01/components/otp-form";

export default function OTPPage() {
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
      <styled.div css={{ w: "full", maxW: "xs" }}>
        <OTPForm />
      </styled.div>
    </styled.div>
  );
}
