"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { sideNav } from "@/config/side-nav";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside
      className={css({
        position: "sticky",
        top: "14",
        left: "0",
        display: "none",
        h: "calc(100vh - 3.5rem)",
        px: "4",
        py: "10",
        minWidth: "240px",
        spaceY: "2",
        md: {
          display: "block",
        },
      })}
    >
      {sideNav.map((nav) => (
        <div key={nav.title}>
          <h4 className={css({ py: "1", textStyle: "sm", fontWeight: "semibold" })}>{nav.title}</h4>
          <ul className={css({ spaceY: "0.5" })}>
            {nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={css({
                    display: "block",
                    bg: pathname === item.href ? "subtle.active!" : "transparent",
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
          </ul>
        </div>
      ))}
    </aside>
  );
}
