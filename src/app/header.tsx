import Link from "next/link";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { flex } from "styled-system/patterns";
import CommandMenu from "@/components/command-menu";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header
      className={css({
        pos: "fixed",
        top: "0",
        zIndex: "1",
        w: "full",
        bg: "bg",
        borderBottomWidth: "1px",
      })}
    >
      <div
        className={flex({
          align: "center",
          justify: "space-between",
          gap: "8",
          maxW: "breakpoint-2xl",
          h: "14",
          mx: "auto",
          px: "4",
        })}
      >
        <div className={flex({ align: "center", gap: "8" })}>
          <Link href="/" className={css({ textStyle: "lg", fontWeight: "bold" })}>
            UI
          </Link>
          <nav className={flex({ gap: "4" })}>
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
          </nav>
        </div>

        <styled.div display="flex" alignItems="center" gap="2">
          <CommandMenu />
          <ThemeToggle />
        </styled.div>
      </div>
    </header>
  );
}
