import { styled } from "styled-system/jsx";
import { SignupForm } from "@/registry/default/blocks/signup-04/components/signup-form";

export default function SignupPage() {
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
      <styled.div css={{ w: "full", maxW: "sm", md: { maxW: "4xl" } }}>
        <SignupForm />
      </styled.div>
    </styled.div>
  );
}
