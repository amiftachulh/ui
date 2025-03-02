import Link from "next/link";
import { css } from "styled-system/css";
import { center, flex } from "styled-system/patterns";
import { button } from "styled-system/recipes";

export default function Home() {
  return (
    <div className={center({ minH: "calc(100svh - 5rem)", py: "8", px: "4", sm: { px: "0" } })}>
      <div className={flex({ direction: "column", align: "center", textAlign: "center" })}>
        <h1 className={css({ textStyle: "2xl", fontWeight: "bold", md: { textStyle: "4xl" } })}>
          Build your component library
        </h1>
        <p
          className={css({ color: "muted.fg", textStyle: "sm", mt: "2", md: { textStyle: "lg" } })}
        >
          A collection of headless component styled with Panda CSS based on shadcn.
        </p>
        <div className={flex({ direction: "column", gap: "2", mt: "4", sm: { flexDir: "row" } })}>
          <Link className={button()} href="/docs/overview/getting-started">
            Getting Started
          </Link>
          <Link className={button({ variant: "outline" })} href="/docs/components/accordion">
            Browse Components
          </Link>
        </div>
      </div>
    </div>
  );
}
