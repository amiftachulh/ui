import Link from "next/link";
import { styled } from "styled-system/jsx";
import { button } from "styled-system/recipes";

export default function Home() {
  return (
    <styled.div
      css={{
        display: "grid",
        placeItems: "center",
        minH: "calc(100vh - 5rem)",
        py: "8",
        px: "4",
        sm: { px: "0" },
      }}
    >
      <styled.div
        css={{ display: "flex", flexDir: "column", alignItems: "center", textAlign: "center" }}
      >
        <styled.h1 css={{ textStyle: "2xl", fontWeight: "bold", md: { textStyle: "4xl" } }}>
          Build your component library
        </styled.h1>
        <styled.p css={{ color: "muted.fg", textStyle: "sm", mt: "2", md: { textStyle: "lg" } }}>
          A collection of component styled with Panda CSS based on shadcn.
        </styled.p>
        <styled.div
          css={{
            display: "flex",
            flexDir: "column",
            alignItems: "center",
            mt: "4",
            gap: "2",
            sm: { flexDir: "row" },
            "& > a": {
              w: "full",
              sm: { w: "auto" },
            },
          }}
        >
          <Link className={button()} href="/docs/overview/getting-started">
            Getting Started
          </Link>
          <Link className={button({ variant: "outline" })} href="/docs/components/accordion">
            Browse Components
          </Link>
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
