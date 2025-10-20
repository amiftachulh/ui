import { styled } from "styled-system/jsx";
import { OTPForm } from "@/registry/default/blocks/otp-02/components/otp-form";

export default function OTPPage() {
  return (
    <styled.div css={{ display: "flex", minH: "svh", w: "full" }}>
      <styled.div
        css={{
          display: "flex",
          w: "full",
          alignItems: "center",
          justifyContent: "center",
          p: "6",
          lg: { w: "1/2" },
        }}
      >
        <styled.div css={{ w: "full", maxW: "xs" }}>
          <OTPForm />
        </styled.div>
      </styled.div>
      <styled.div css={{ pos: "relative", display: "none", w: "1/2", lg: { display: "block" } }}>
        <styled.img
          alt="Authentication"
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
          height={1080}
          src="/placeholder.svg"
          width={1920}
        />
      </styled.div>
    </styled.div>
  );
}
