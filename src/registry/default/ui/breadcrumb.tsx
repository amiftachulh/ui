"use client";

import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { breadcrumb } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(breadcrumb);

function Root(props: React.ComponentProps<"nav">) {
  return <nav data-slot="breadcrumb" aria-label="breadcrumb" {...props} />;
}
const Breadcrumb = withProvider(Root, "root");

const BreadcrumbList = withContext("ol", "list", {
  defaultProps: {
    "data-slot": "breadcrumb-list",
  },
});

const BreadcrumbItem = withContext("li", "item", {
  defaultProps: {
    "data-slot": "breadcrumb-item",
  },
});

function Link({ asChild, ...props }: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";
  return <Comp data-slot="breadcrumb-link" {...props} />;
}
const BreadcrumbLink = withContext(Link, "link");

function Page(props: React.ComponentProps<"span">) {
  return (
    <span data-slot="breadcrumb-page" role="link" aria-disabled aria-current="page" {...props} />
  );
}
const BreadcrumbPage = withContext(Page, "page");

function Separator({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <li data-slot="breadcrumb-separator" role="presentation" aria-hidden {...props}>
      {children ?? <LuChevronRight />}
    </li>
  );
}
const BreadcrumbSeparator = withContext(Separator, "separator");

function Ellipsis(props: React.ComponentProps<"span">) {
  return (
    <span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden {...props}>
      <LuEllipsis className={css({ w: "4", h: "4" })} />
      <span className={css({ srOnly: true })}>More</span>
    </span>
  );
}
const BreadcrumbEllipsis = withContext(Ellipsis, "ellipsis");

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
