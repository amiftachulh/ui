import { styled } from "styled-system/jsx";
import { SignupForm } from "@/registry/default/blocks/signup-01/components/signup-form";

export default function Page() {
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
        <SignupForm />
      </styled.div>
    </styled.div>
  );
}
