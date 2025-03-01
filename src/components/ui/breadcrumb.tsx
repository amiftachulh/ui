import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { breadcrumb } from "styled-system/recipes";

const classes = breadcrumb();

function Root({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="breadcrumb"
      className={cx(classes.root, className)}
      aria-label="breadcrumb"
      {...props}
    />
  );
}
const Breadcrumb = styled(Root);
Breadcrumb.displayName = "Breadcrumb";

function List({ className, ...props }: React.ComponentProps<"ol">) {
  return <ol data-slot="breadcrumb-list" className={cx(classes.list, className)} {...props} />;
}
const BreadcrumbList = styled(List);
BreadcrumbList.displayName = "BreadcrumbList";

function Item({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="breadcrumb-item" className={cx(classes.item, className)} {...props} />;
}
const BreadcrumbItem = styled(Item);
BreadcrumbItem.displayName = "BreadcrumbItem";

function Link({ className, asChild, ...props }: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";
  return <Comp data-slot="breadcrumb-link" className={cx(classes.link, className)} {...props} />;
}
const BreadcrumbLink = styled(Link);
BreadcrumbLink.displayName = "BreadcrumbLink";

function Page({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      className={cx(classes.page, className)}
      role="link"
      aria-disabled
      aria-current="page"
      {...props}
    />
  );
}
const BreadcrumbPage = styled(Page);
BreadcrumbPage.displayName = "BreadcrumbPage";

function Separator({ className, children, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      className={cx(classes.separator, className)}
      role="presentation"
      aria-hidden
      {...props}
    >
      {children ?? <LuChevronRight />}
    </li>
  );
}
const BreadcrumbSeparator = styled(Separator);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

function Ellipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      className={cx(classes.ellipsis, className)}
      role="presentation"
      aria-hidden
      {...props}
    >
      <LuEllipsis className={css({ w: "4", h: "4" })} />
      <span className={css({ srOnly: true })}>More</span>
    </span>
  );
}
const BreadcrumbEllipsis = styled(Ellipsis);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
