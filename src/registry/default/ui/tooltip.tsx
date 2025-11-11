"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { tooltip } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(tooltip);

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

function Root(props: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  );
}
const Tooltip = withRootProvider(Root);

const TooltipTrigger = withContext(TooltipPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "tooltip-trigger",
  },
});

function Content({
  children,
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content data-slot="tooltip-content" sideOffset={sideOffset} {...props}>
        {children}
        <TooltipPrimitive.Arrow
          className={css({
            bg: "primary",
            fill: "primary",
            zIndex: "50",
            w: "2.5",
            h: "2.5",
            transform: "translateY(calc(-50% - 2px)) rotate(45deg)",
            rounded: "2px",
          })}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
const TooltipContent = withContext(Content, "content");

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
