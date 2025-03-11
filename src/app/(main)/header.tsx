import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { container } from "styled-system/patterns";
import CommandMenu from "@/components/command-menu";
import MobileNav from "@/components/mobile-nav";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <styled.header
      css={{
        pos: "fixed",
        top: "0",
        zIndex: "1",
        w: "full",
        bg: "bg",
        borderBottomWidth: "1px",
      }}
    >
      <styled.div
        className={container()}
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4",
          // maxW: "breakpoint-2xl",
          h: "14",
          // mx: "auto",
          // px: "4",
        }}
      >
        <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
          <Link
            href="/"
            className={css({
              display: "none",
              textStyle: "lg",
              fontWeight: "bold",
              mr: "4",
              md: { display: "block" },
            })}
          >
            UI
          </Link>
          <MobileNav />
          <styled.nav css={{ display: "none", md: { display: "flex", gap: "4" } }}>
            <Link
              className={css({
                color: "fg/80",
                textStyle: "sm",
                fontWeight: "medium",
                _hover: {
                  color: "fg",
                },
              })}
              href="/docs/overview/introduction"
            >
              Documentation
            </Link>
          </styled.nav>
        </styled.div>

        <styled.div
          css={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            gap: "2",
            sm: { flex: "initial" },
          }}
        >
          <CommandMenu />
          <ThemeToggle />
        </styled.div>
      </styled.div>
    </styled.header>
  );
}
