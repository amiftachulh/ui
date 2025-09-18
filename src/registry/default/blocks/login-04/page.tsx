import { styled } from "styled-system/jsx";
import { LoginForm } from "@/registry/default/blocks/login-04/components/login-form";

export default function LoginPage() {
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
        <LoginForm />
      </styled.div>
    </styled.div>
  );
}
