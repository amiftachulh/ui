"use client";

import * as React from "react";
import { LuChevronLeft, LuChevronRight, LuEllipsis } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { button, ButtonVariantProps, pagination } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(pagination);

function Root(props: React.ComponentProps<"nav">) {
  return <nav role="navigation" aria-label="pagination" {...props} />;
}
const Pagination = withProvider(Root, "root");

const PaginationContent = withContext("ul", "content");
const PaginationItem = withContext("li", "item");

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonVariantProps, "size"> &
  React.ComponentProps<"a">;

function Link({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      className={cx(
        button({
          variant: isActive ? "outline" : "ghost",
          size,
        }),
        className
      )}
      {...props}
    />
  );
}
const PaginationLink = withContext(Link, "link");

function Previous(props: React.ComponentProps<typeof Link>) {
  return (
    <Link aria-label="Go to previous page" size="md" {...props}>
      <LuChevronLeft className={css({ w: "4", h: "4" })} />
      <span>Previous</span>
    </Link>
  );
}
const PaginationPrevious = withContext(Previous, "previous");

function Next(props: React.ComponentProps<typeof Link>) {
  return (
    <Link aria-label="Go to next page" size="md" {...props}>
      <span>Next</span>
      <LuChevronRight className={css({ w: "4", h: "4" })} />
    </Link>
  );
}
const PaginationNext = withContext(Next, "next");

function Ellipsis(props: React.ComponentProps<"span">) {
  return (
    <span aria-hidden {...props}>
      <LuEllipsis className={css({ w: "4", h: "4" })} />
      <span className={css({ srOnly: "true" })}>More pages</span>
    </span>
  );
}
const PaginationEllipsis = withContext(Ellipsis, "ellipsis");

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
