"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scroll } from "styled-system/recipes";
import { docsConfig } from "@/config/docs";
import { NEW_PAGES } from "@/lib/docs";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <styled.aside
      className={scroll()}
      css={{
        position: "sticky",
        top: "14",
        left: "0",
        overflowY: "auto",
        display: "none",
        h: "calc(100vh - 3.5rem)",
        pr: "4",
        py: "10",
        minWidth: "240px",
        spaceY: "2",
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
        md: {
          display: "block",
        },
      }}
    >
      {docsConfig.sidebarNav.map((nav) => (
        <div key={nav.title}>
          <styled.h4 css={{ py: "1", textStyle: "sm", fontWeight: "semibold" }}>
            {nav.title}
          </styled.h4>
          <styled.ul css={{ spaceY: "0.5" }}>
            {nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as string}
                  data-active={pathname === item.href}
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "1",
                    w: "full",
                    bg: "transparent",
                    color: "fg",
                    px: "2",
                    py: "1",
                    textStyle: "sm",
                    rounded: "md",
                    _hover: {
                      bg: "primary/20",
                    },
                    "&[data-active=true]": {
                      bg: "primary/20",
                    },
                  })}
                >
                  {item.title}
                  {NEW_PAGES.includes(item.href as string) && (
                    <styled.span
                      css={{
                        ml: "2",
                        px: "1.5",
                        py: "0.5",
                        textStyle: "xs",
                        rounded: "full",
                        bg: "primary",
                        color: "primary.fg",
                      }}
                    >
                      New
                    </styled.span>
                  )}
                </Link>
              </li>
            ))}
          </styled.ul>
        </div>
      ))}
    </styled.aside>
  );
}
