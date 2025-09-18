import { styled } from "styled-system/jsx";
import { LoginForm } from "@/registry/default/blocks/login-05/components/login-form";

export default function LoginPage() {
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
        <LoginForm />
      </styled.div>
    </styled.div>
  );
}
