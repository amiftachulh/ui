import * as React from "react";
import { LuChevronLeft, LuChevronRight, LuEllipsis } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { button, ButtonVariantProps, pagination } from "styled-system/recipes";

const classes = pagination();

function Root({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cx(classes.root, className)}
      {...props}
    />
  );
}
const Pagination = styled(Root);
Pagination.displayName = "Pagination";

function Content({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul data-slot="pagination-content" className={cx(classes.content, className)} {...props} />
  );
}
const PaginationContent = styled(Content);
PaginationContent.displayName = "PaginationContent";

function Item({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" className={cx(classes.item, className)} {...props} />;
}
const PaginationItem = styled(Item);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonVariantProps, "size"> &
  React.ComponentProps<"a">;

function Link({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
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
const PaginationLink = styled(Link);
PaginationLink.displayName = "PaginationLink";

function Previous({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Go to previous page"
      size="md"
      data-slot="pagination-previous"
      className={cx(classes.previous, className)}
      {...props}
    >
      <LuChevronLeft className={css({ w: "4", h: "4" })} />
      <span>Previous</span>
    </Link>
  );
}
const PaginationPrevious = styled(Previous);
PaginationPrevious.displayName = "PaginationPrevious";

function Next({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      aria-label="Go to next page"
      size="md"
      data-slot="pagination-next"
      className={cx(classes.next, className)}
      {...props}
    >
      <span>Next</span>
      <LuChevronRight className={css({ w: "4", h: "4" })} />
    </Link>
  );
}
const PaginationNext = styled(Next);
PaginationNext.displayName = "PaginationNext";

function Ellipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden
      className={cx(classes.ellipsis, className)}
      {...props}
    >
      <LuEllipsis className={css({ w: "4", h: "4" })} />
      <span className={css({ srOnly: "true" })}>More pages</span>
    </span>
  );
}
const PaginationEllipsis = styled(Ellipsis);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
