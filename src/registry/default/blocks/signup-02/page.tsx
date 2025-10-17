import { LuGalleryVerticalEnd } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { SignupForm } from "@/registry/default/blocks/signup-02/components/signup-form";

export default function SignupPage() {
  return (
    <styled.div
      css={{ display: "grid", minH: "svh", lg: { gridTemplateColumns: "repeat(2, 1fr)" } }}
    >
      <styled.div css={{ display: "flex", flexDir: "column", gap: "4", p: "6", md: { p: "10" } }}>
        <styled.div
          css={{
            display: "flex",
            justifyContent: "center",
            gap: "2",
            md: { justifyContent: "flex-start" },
          }}
        >
          <styled.a
            href="#"
            css={{ display: "flex", alignItems: "center", gap: "2", fontWeight: "medium" }}
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
        </styled.div>
        <styled.div
          css={{ display: "flex", flex: "1", alignItems: "center", justifyContent: "center" }}
        >
          <styled.div css={{ w: "full", maxW: "xs" }}>
            <SignupForm />
          </styled.div>
        </styled.div>
      </styled.div>
      <styled.div css={{ bg: "muted", pos: "relative", display: "none", lg: { display: "block" } }}>
        <styled.img
          src="/placeholder.svg"
          alt="Image"
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
        />
      </styled.div>
    </styled.div>
  );
}
