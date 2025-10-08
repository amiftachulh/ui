"use client";

import { createStyleContext } from "styled-system/jsx";
import { empty } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(empty);

const Empty = withProvider("div", "root");
const EmptyHeader = withContext("div", "header");

function Media({
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" }) {
  return <div data-variant={variant} {...props} />;
}
const EmptyMedia = withContext(Media, "media");

const EmptyTitle = withContext("div", "title");
const EmptyDescription = withContext("div", "description");
const EmptyContent = withContext("div", "content");

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia };
