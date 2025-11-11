"use client";

import * as React from "react";
import { LuChevronLeft, LuChevronRight, LuEllipsis } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { button, ButtonVariantProps, pagination } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(pagination);

const Pagination = withProvider("nav", "root", {
  defaultProps: {
    role: "navigation",
    "aria-label": "pagination",
    "data-slot": "pagination",
  },
});

const PaginationContent = withContext("ul", "content", {
  defaultProps: {
    "data-slot": "pagination-content",
  },
});

const PaginationItem = withContext("li", "item", {
  defaultProps: {
    "data-slot": "pagination-item",
  },
});

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonVariantProps, "size"> &
  React.ComponentProps<"a">;

function Link({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
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
    <span data-slot="pagination-ellipsis" aria-hidden {...props}>
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
