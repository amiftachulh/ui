import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { breadcrumb } from "styled-system/recipes";

const classes = breadcrumb();

const Breadcrumb = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav className={cx(classes.root, className)} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = ({ className, ...props }: React.ComponentProps<"ol">) => (
  <ol className={cx(classes.list, className)} {...props} />
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = ({ className, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(classes.item, className)} {...props} />
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cx(classes.link, className)} {...props} />;
};
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    className={cx(classes.page, className)}
    role="link"
    aria-disabled
    aria-current="page"
    {...props}
  />
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ className, children, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(classes.separator, className)} role="presentation" aria-hidden {...props}>
    {children ?? <LuChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.ellipsis, className)} role="presentation" aria-hidden {...props}>
    <LuEllipsis className={css({ w: "4", h: "4" })} />
    <span className={css({ srOnly: true })}>More</span>
  </span>
);
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
