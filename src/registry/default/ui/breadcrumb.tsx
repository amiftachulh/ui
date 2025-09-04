"use client";

import * as React from "react";
import { LuChevronRight, LuEllipsis } from "react-icons/lu";
import { Slot } from "@radix-ui/react-slot";
import { css } from "styled-system/css";
import { breadcrumb } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(breadcrumb);

function Root(props: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" {...props} />;
}
const Breadcrumb = withProvider(Root, "root");
const BreadcrumbList = withContext("ol", "list");
const BreadcrumbItem = withContext("li", "item");

function Link({ asChild, ...props }: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";
  return <Comp {...props} />;
}
const BreadcrumbLink = withContext(Link, "link");

function Page(props: React.ComponentProps<"span">) {
  return <span role="link" aria-disabled aria-current="page" {...props} />;
}
const BreadcrumbPage = withContext(Page, "page");

function Separator({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <li role="presentation" aria-hidden {...props}>
      {children ?? <LuChevronRight />}
    </li>
  );
}
const BreadcrumbSeparator = withContext(Separator, "separator");

function Ellipsis(props: React.ComponentProps<"span">) {
  return (
    <span role="presentation" aria-hidden {...props}>
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
