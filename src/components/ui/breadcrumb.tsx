import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { breadcrumb } from "styled-system/recipes";

const styles = breadcrumb();

const Root = (props: React.ComponentProps<"nav">) => <nav aria-label="breadcrumb" {...props} />;
const Breadcrumb = styled(Root);

const List = ({ className, ...props }: React.ComponentProps<"ol">) => (
  <ol className={cx(styles.list, className)} {...props} />
);
const BreadcrumbList = styled(List);

const Item = ({ className, ...props }: React.ComponentProps<"li">) => (
  <li className={cx(styles.item, className)} {...props} />
);
const BreadcrumbItem = styled(Item);

const Link = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a";
  return <Comp className={cx(styles.link, className)} {...props} />;
};
const BreadcrumbLink = styled(Link);

const Page = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="link"
    aria-disabled
    aria-current="page"
    className={cx(styles.page, className)}
    {...props}
  />
);
const BreadcrumbPage = styled(Page);

const Separator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden className={cx(styles.separator, className)} {...props}>
    {children ?? <LuChevronRight />}
  </li>
);
const BreadcrumbSeparator = styled(Separator);

const Ellipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span role="presentation" aria-hidden className={cx(styles.ellipsis, className)} {...props}>
    <LuEllipsis className={css({ w: "4", h: "4" })} />
    <span className={visuallyHidden()}>More</span>
  </span>
);
const BreadcrumbEllipsis = styled(Ellipsis);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
