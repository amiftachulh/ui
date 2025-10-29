import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { FieldDescription } from "@/registry/default/ui/field";
import { UserAuthForm } from "./components/user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <styled.div css={{ md: { display: "none" } }}>
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className={css({ display: "block", _dark: { display: "none" } })}
          priority
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className={css({ display: "none", _dark: { display: "block" } })}
          priority
        />
      </styled.div>
      <styled.div
        css={{
          pos: "relative",
          display: "none",
          flex: "1",
          flexShrink: "0",
          alignItems: "center",
          justifyContent: "center",
          py: "6",
          md: {
            display: "grid",
            py: "0",
          },
          lg: {
            maxW: "none",
            gridTemplateColumns: "repeat(2, 1fr)",
            px: "0",
          },
        }}
      >
        <Button variant="ghost" asChild>
          <Link
            href="/examples/authentication"
            className={css({
              pos: "absolute",
              top: "4",
              right: "4",
              md: {
                top: "8",
                right: "8",
              },
            })}
          >
            Login
          </Link>
        </Button>
        <styled.div
          css={{
            color: "primary",
            pos: "relative",
            display: "none",
            h: "full",
            flexDir: "column",
            p: "10",
            lg: { display: "flex" },
            _dark: { borderRightWidth: "1px" },
          }}
        >
          <styled.div css={{ bg: "primary/5", pos: "absolute", inset: "0" }} />
          <styled.div
            css={{
              pos: "relative",
              zIndex: "20",
              display: "flex",
              alignItems: "center",
              textStyle: "lg",
              fontWeight: "medium",
            }}
          >
            <styled.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              css={{ mr: "2", w: "6", h: "6" }}
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </styled.svg>
            Acme Inc
          </styled.div>
          <styled.div css={{ pos: "relative", zIndex: "20", mt: "auto" }}>
            <styled.blockquote css={{ lineHeight: "normal", textWrap: "balance" }}>
              &ldquo;This library has saved me countless hours of work and helped me deliver
              stunning designs to my clients faster than ever before.&rdquo; - Sofia Davis
            </styled.blockquote>
          </styled.div>
        </styled.div>
        <styled.div
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lg: { h: "1000px", p: "8" },
          }}
        >
          <styled.div
            css={{
              mx: "auto",
              display: "flex",
              w: "full",
              flexDir: "column",
              justifyContent: "center",
              gap: "6",
              sm: { w: "350px" },
            }}
          >
            <styled.div css={{ display: "flex", flexDir: "column", gap: "2", textAlign: "center" }}>
              <styled.h1 css={{ textStyle: "2xl", fontWeight: "semibold", letterSpacing: "tight" }}>
                Create an account
              </styled.h1>
              <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
                Enter your email below to create your account
              </styled.p>
            </styled.div>
            <UserAuthForm />
            <FieldDescription css={{ px: "6", textAlign: "center" }}>
              By clicking continue, you agree to our <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </FieldDescription>
          </styled.div>
        </styled.div>
      </styled.div>
    </>
  );
}
