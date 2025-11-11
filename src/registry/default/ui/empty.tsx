"use client";

import { createStyleContext } from "styled-system/jsx";
import { empty } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(empty);

const Empty = withProvider("div", "root", {
  defaultProps: {
    "data-slot": "empty",
  },
});

const EmptyHeader = withContext("div", "header", {
  defaultProps: {
    "data-slot": "empty-header",
  },
});

function Media({
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" }) {
  return <div data-slot="empty-media" data-variant={variant} {...props} />;
}
const EmptyMedia = withContext(Media, "media");

const EmptyTitle = withContext("div", "title", {
  defaultProps: {
    "data-slot": "empty-title",
  },
});

const EmptyDescription = withContext("div", "description", {
  defaultProps: {
    "data-slot": "empty-description",
  },
});

const EmptyContent = withContext("div", "content", {
  defaultProps: {
    "data-slot": "empty-content",
  },
});

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia };
