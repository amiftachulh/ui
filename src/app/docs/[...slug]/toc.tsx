"use client";

import { useEffect, useState } from "react";
import { css, cva } from "styled-system/css";
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
    <nav
      className={css({
        pos: "sticky",
        top: "14",
        display: "none",
        h: "calc(100vh - 3.5rem)",
        px: "4",
        py: "10",
        w: "full",
        maxWidth: "220px",
        overflowY: "auto",
        lg: {
          display: "block",
        },
      })}
    >
      <div className={css({ spaceY: "2" })}>
        <h4 className={css({ fontWeight: "semibold" })}>On this page</h4>
        <ul className={css({ spaceY: "2", textStyle: "sm" })}>
          {headings
            .filter((heading) => heading.level !== 1)
            .map((heading) => (
              <li
                key={heading.id}
                className={headingVariants({
                  level: heading.level as typeof headingVariants.__type.level,
                })}
              >
                <a
                  href={`#${heading.id}`}
                  className={css({
                    display: "inline-block",
                    color: activeId === heading.id ? "fg" : "fg/80",
                    fontWeight: activeId === heading.id ? "medium" : "normal",
                    _hover: {
                      color: "fg",
                    },
                  })}
                >
                  {heading.text}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
