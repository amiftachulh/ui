"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { popover } from "styled-system/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(popover);

const Popover = withRootProvider(PopoverPrimitive.Root);
const PopoverTrigger = withContext(PopoverPrimitive.Trigger, "trigger");

function Content({
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content align={align} sideOffset={sideOffset} {...props} />
    </PopoverPrimitive.Portal>
  );
}
const PopoverContent = withContext(Content, "content");

const PopoverAnchor = withContext(PopoverPrimitive.Anchor, "anchor");

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
