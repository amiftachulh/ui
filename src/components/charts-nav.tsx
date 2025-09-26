"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { ScrollArea, Scrollbar } from "@/registry/default/ui/scroll-area";

const links = [
  {
    name: "Area Charts",
    href: "/charts/area#charts",
  },
  {
    name: "Bar Charts",
    href: "/charts/bar#charts",
  },
  {
    name: "Line Charts",
    href: "/charts/line#charts",
  },
  {
    name: "Pie Charts",
    href: "/charts/pie#charts",
  },
  {
    name: "Radar Charts",
    href: "/charts/radar#charts",
  },
  {
    name: "Radial Charts",
    href: "/charts/radial#charts",
  },
  {
    name: "Tooltips",
    href: "/charts/tooltip#charts",
  },
];

export function ChartsNav(props: React.ComponentProps<"div">) {
  const pathname = usePathname();

  return (
    <styled.div css={{ pos: "relative", overflow: "hidden" }}>
      <ScrollArea css={{ maxW: "600px", lg: { maxW: "none" } }}>
        <styled.div css={{ display: "flex", alignItems: "center" }} {...props}>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              data-active={link.href.startsWith(pathname)}
              className={css({
                display: "flex",
                h: "7",
                flexShrink: "0",
                alignItems: "center",
                justifyContent: "center",
                px: "4",
                color: "muted.fg",
                textAlign: "center",
                textStyle: "md",
                fontWeight: "medium",
                transition: "colors",
                _hover: { color: "primary" },
                "&[data-active=true]": { color: "primary" },
              })}
            >
              {link.name}
            </Link>
          ))}
        </styled.div>
        <Scrollbar orientation="horizontal" css={{ visibility: "hidden" }} />
      </ScrollArea>
    </styled.div>
  );
}
