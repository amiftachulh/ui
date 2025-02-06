import Link from "next/link";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
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
          <h1 className={css({ textStyle: "lg", fontWeight: "bold" })}>UI</h1>
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
              href="/docs/overview/getting-started"
            >
              Documentation
            </Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
