"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scroll } from "styled-system/recipes";
import { docsConfig } from "@/config/docs";

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
                  className={css({
                    display: "block",
                    bg: pathname === item.href ? "primary/10!" : "transparent",
                    color: "fg",
                    px: "2",
                    py: "1",
                    textStyle: "sm",
                    rounded: "md",
                    _hover: {
                      bg: "zinc.500/20",
                    },
                  })}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </styled.ul>
        </div>
      ))}
    </styled.aside>
  );
}
