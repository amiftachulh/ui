"use client";

import { Slot } from "@radix-ui/react-slot";
import { createStyleContext } from "styled-system/jsx";
import { item } from "styled-system/recipes";
import { Separator } from "@/registry/default/ui/separator";

const { withProvider, withContext } = createStyleContext(item);

const ItemGroup = withProvider("div", "group", { defaultProps: { role: "list" } });

const ItemSeparator = withContext(Separator, "separator", {
  defaultProps: {
    orientation: "horizontal",
    css: {
      my: "0",
    },
  },
});

function Root({
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "outline" | "muted";
  size?: "default" | "sm";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";
  return <Comp data-variant={variant} data-size={size} {...props} />;
}
const Item = withProvider(Root, "root");

function Media({
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "icon" | "image" }) {
  return <div data-variant={variant} {...props} />;
}
const ItemMedia = withContext(Media, "media");

const ItemContent = withContext("div", "content");
const ItemTitle = withContext("div", "title");
const ItemDescription = withContext("p", "description");
const ItemActions = withContext("div", "actions");
const ItemHeader = withContext("div", "header");
const ItemFooter = withContext("div", "footer");

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
};
