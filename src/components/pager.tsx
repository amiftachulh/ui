import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Link from "next/link";
import { styled } from "styled-system/jsx";
import { docsConfig } from "@/config/docs";
import type { Doc } from "@/lib/mdx";
import { Button } from "@/registry/default/ui/button";
import type { NavItem, NavItemWithChildren } from "@/types/nav";

interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc);

  if (!pager) {
    return null;
  }

  return (
    <styled.div
      css={{
        display: "flex",
        flexDir: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {pager?.prev?.href && (
        <Button
          variant="ghost"
          asChild
          css={{
            _hover: {
              bg: "primary/20",
            },
          }}
        >
          <Link href={pager.prev.href}>
            <LuChevronLeft />
            {pager.prev.title}
          </Link>
        </Button>
      )}
      {pager?.next?.href && (
        <Button variant="ghost" css={{ ml: "auto", _hover: { bg: "primary/20" } }} asChild>
          <Link href={pager.next.href}>
            {pager.next.title}
            <LuChevronRight />
          </Link>
        </Button>
      )}
    </styled.div>
  );
}

export function getPagerForDoc(doc: Doc) {
  const nav = docsConfig.sidebarNav;
  const flattenedLinks = [null, ...flatten(nav), null];
  const activeIndex = flattenedLinks.findIndex((link) => doc.meta.slug === link?.href);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next,
  };
}

function flatten(links: NavItemWithChildren[]): NavItem[] {
  return links
    .reduce<NavItem[]>((flat, link) => {
      return flat.concat(link.items?.length ? flatten(link.items) : link);
    }, [])
    .filter((link) => !link?.disabled);
}
