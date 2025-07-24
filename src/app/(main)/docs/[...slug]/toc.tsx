"use client";

import { useEffect, useState } from "react";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scroll } from "styled-system/recipes";
import type { Heading } from "@/lib/mdx";

const headingVariants = cva({
  variants: {
    level: {
      3: { ml: "4" },
      4: { ml: "8" },
      5: { ml: "12" },
      6: { ml: "16" },
    },
  },
});

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0% -66%" }
    );

    const headingElements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, [headings]);

  return (
    <styled.nav
      className={scroll()}
      css={{
        pos: "sticky",
        top: "14",
        display: "none",
        h: "calc(100vh - 3.5rem)",
        pl: "4",
        py: "10",
        w: "full",
        maxWidth: "220px",
        overflowY: "auto",
        _scrollbarThumb: {
          bg: "transparent",
        },
        _hover: {
          _scrollbarThumb: {
            bg: "zinc.300",
            _dark: {
              bg: "zinc.700",
            },
          },
        },
        lg: {
          display: "block",
        },
      }}
    >
      <styled.div css={{ spaceY: "2" }}>
        <styled.h4 css={{ fontWeight: "semibold" }}>On this page</styled.h4>
        <styled.ul css={{ spaceY: "2", textStyle: "sm" }}>
          {headings
            .filter((heading) => heading.level !== 1)
            .map((heading) => (
              <li
                key={heading.id}
                className={headingVariants({
                  level: heading.level as typeof headingVariants.__type.level,
                })}
              >
                <styled.a
                  href={`#${heading.id}`}
                  data-active={activeId === heading.id}
                  css={{
                    display: "inline-block",
                    color: "fg/80",
                    _hover: {
                      color: "fg",
                    },
                    "&[data-active=true]": {
                      color: "fg",
                      fontWeight: "medium",
                    },
                  }}
                >
                  {heading.text}
                </styled.a>
              </li>
            ))}
        </styled.ul>
      </styled.div>
    </styled.nav>
  );
}
