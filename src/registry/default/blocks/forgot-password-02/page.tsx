import { LuGalleryVerticalEnd } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { ForgotPasswordForm } from "@/registry/default/blocks/forgot-password-02/components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <styled.div
      css={{
        display: "grid",
        minH: "svh",
        lg: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
      }}
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
            <ForgotPasswordForm />
          </styled.div>
        </styled.div>
      </styled.div>
      <styled.div
        css={{ bg: "muted", pos: "relative", display: "none", lg: { display: "block" } }}
        className="bg-muted relative hidden lg:block"
      >
        <styled.img
          src="/placeholder.svg"
          alt="Image"
          css={{
            pos: "absolute",
            inset: "0",
            h: "full",
            w: "full",
            objectFit: "cover",
            _dark: { filter: "brightness(0.2) grayscale(100%)" },
          }}
        />
      </styled.div>
    </styled.div>
  );
}
