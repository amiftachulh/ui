import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { tooltip } from "styled-system/recipes";

const classes = tooltip();

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />;
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  );
}

function Trigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}
const TooltipTrigger = styled(Trigger);
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

function Content({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cx(classes.content, className)}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
const TooltipContent = styled(Content);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
