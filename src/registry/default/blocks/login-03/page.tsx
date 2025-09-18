import { LuGalleryVerticalEnd } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { LoginForm } from "@/registry/default/blocks/login-03/components/login-form";

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
        gap: "6",
        p: "6",
        md: { p: "10" },
      }}
    >
      <styled.div css={{ display: "flex", w: "full", maxW: "sm", flexDir: "column", gap: "6" }}>
        <styled.a
          href="#"
          css={{
            display: "flex",
            alignItems: "center",
            gap: "2",
            alignSelf: "center",
            fontWeight: "medium",
          }}
        >
          <styled.div
            css={{
              bg: "primary",
              color: "primary.fg",
              display: "flex",
              w: "6",
              h: "6",
              alignItems: "center",
              justifyContent: "center",
              rounded: "md",
            }}
          >
            <LuGalleryVerticalEnd className={css({ w: "4", h: "4" })} />
          </styled.div>
          Acme Inc.
        </styled.a>
        <LoginForm />
      </styled.div>
    </styled.div>
  );
}
