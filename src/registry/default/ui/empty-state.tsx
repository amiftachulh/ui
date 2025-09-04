"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { emptyState } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(emptyState);

const EmptyState = withProvider("div", "root");
const EmptyStateIndicator = withContext("div", "indicator");
const EmptyStateContent = withContext("div", "content");

function Title({ asChild, ...props }: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return <Comp {...props} />;
}
const EmptyStateTitle = withContext(Title, "title");

const EmptyStateDescription = withContext("p", "description");
const EmptyStateActions = withContext("div", "actions");

export {
  EmptyState,
  EmptyStateIndicator,
  EmptyStateContent,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
};
