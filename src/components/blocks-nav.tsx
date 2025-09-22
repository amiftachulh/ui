"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { ScrollArea, Scrollbar } from "@/registry/default/ui/scroll-area";
import { registryCategories } from "@/registry/registry-categories";

export function BlocksNav() {
  const pathname = usePathname();

  return (
    <styled.div css={{ pos: "relative", overflow: "hidden", py: "4", md: { py: "0" } }}>
      <ScrollArea css={{ maxW: "none" }}>
        <styled.div css={{ display: "flex", alignItems: "center" }}>
          <BlocksNavLink
            category={{ name: "Featured", slug: "", hidden: false }}
            isActive={pathname === "/blocks"}
          />
          {registryCategories
            .filter((category) => !category.hidden)
            .map((category) => (
              <BlocksNavLink
                key={category.slug}
                category={category}
                isActive={pathname === `/blocks/${category.slug}`}
              />
            ))}
        </styled.div>
        <Scrollbar orientation="horizontal" css={{ visibility: "hidden" }} />
      </ScrollArea>
    </styled.div>
  );
}

function BlocksNavLink({
  category,
  isActive,
}: {
  category: (typeof registryCategories)[number];
  isActive: boolean;
}) {
  return (
    <Link
      href={`/blocks/${category.slug}`}
      key={category.slug}
      data-active={isActive}
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        h: "7",
        px: "4",
        textAlign: "center",
        fontWeight: "medium",
        transition: "colors",
        color: "muted.fg",
        _hover: {
          color: "primary",
        },
        "&[data-active=true]": {
          color: "primary",
        },
      })}
    >
      {category.name}
    </Link>
  );
}
