import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { breadcrumb } from "styled-system/recipes";

const classes = breadcrumb();

const Root = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav className={cx(classes.root, className)} aria-label="breadcrumb" {...props} />
);
const Breadcrumb = styled(Root);
Breadcrumb.displayName = "Breadcrumb";

const List = ({ className, ...props }: React.ComponentProps<"ol">) => (
  <ol className={cx(classes.list, className)} {...props} />
);
const BreadcrumbList = styled(List);
BreadcrumbList.displayName = "BreadcrumbList";

const Item = ({ className, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(classes.item, className)} {...props} />
);
const BreadcrumbItem = styled(Item);
BreadcrumbItem.displayName = "BreadcrumbItem";

const Link = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cx(classes.link, className)} {...props} />;
};
const BreadcrumbLink = styled(Link);
BreadcrumbLink.displayName = "BreadcrumbLink";

const Page = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    className={cx(classes.page, className)}
    role="link"
    aria-disabled
    aria-current="page"
    {...props}
  />
);
const BreadcrumbPage = styled(Page);
BreadcrumbPage.displayName = "BreadcrumbPage";

const Separator = ({ className, children, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(classes.separator, className)} role="presentation" aria-hidden {...props}>
    {children ?? <LuChevronRight />}
  </li>
);
const BreadcrumbSeparator = styled(Separator);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const Ellipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.ellipsis, className)} role="presentation" aria-hidden {...props}>
    <LuEllipsis className={css({ w: "4", h: "4" })} />
    <span className={css({ srOnly: true })}>More</span>
  </span>
);
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
