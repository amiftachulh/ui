import { styled } from "styled-system/jsx";
import { LoginForm } from "@/registry/default/blocks/login-01/components/login-form";

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
        <LoginForm />
      </styled.div>
    </styled.div>
  );
}
