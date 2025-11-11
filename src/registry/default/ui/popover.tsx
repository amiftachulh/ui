"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { createStyleContext } from "styled-system/jsx";
import { popover } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(popover);

const Popover = withRootProvider(PopoverPrimitive.Root);

const PopoverTrigger = withContext(PopoverPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "popover-trigger",
  },
});

function Content({
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
const PopoverContent = withContext(Content, "content");

const PopoverAnchor = withContext(PopoverPrimitive.Anchor, "anchor", {
  defaultProps: {
    "data-slot": "popover-anchor",
  },
});

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
