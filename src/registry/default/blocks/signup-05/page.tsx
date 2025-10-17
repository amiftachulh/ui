import { styled } from "styled-system/jsx";
import { SignupForm } from "@/registry/default/blocks/signup-05/components/signup-form";

export default function SignupPage() {
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
        <SignupForm />
      </styled.div>
    </styled.div>
  );
}
