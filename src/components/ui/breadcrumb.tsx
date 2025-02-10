import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { visuallyHidden } from "styled-system/patterns";
import { breadcrumb } from "styled-system/recipes";

const classes = breadcrumb();

const Breadcrumb = (props: React.ComponentProps<"nav">) => (
  <nav aria-label="breadcrumb" {...props} />
);

const BreadcrumbList = ({ className, ...props }: React.ComponentProps<"ol">) => (
  <ol className={cx(classes.list, className)} {...props} />
);
const BreadcrumbItem = ({ className, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(classes.item, className)} {...props} />
);
const BreadcrumbLink = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cx(classes.link, className)} {...props} />;
};

const BreadcrumbPage = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="link"
    aria-disabled
    aria-current="page"
    className={cx(classes.page, className)}
    {...props}
  />
);

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden className={cx(classes.separator, className)} {...props}>
    {children ?? <LuChevronRight />}
  </li>
);

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden className={cx(classes.ellipsis, className)} {...props}>
    <LuEllipsis className={css({ w: "4", h: "4" })} />
    <span className={visuallyHidden()}>More</span>
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
