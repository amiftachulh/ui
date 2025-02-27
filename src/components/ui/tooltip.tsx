import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { tooltip } from "styled-system/recipes";

const classes = tooltip();

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = styled(TooltipPrimitive.Trigger);
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const Content = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => (
  <TooltipPrimitive.Content
    className={cx(classes.content, className)}
    sideOffset={sideOffset}
    {...props}
  />
);
const TooltipContent = styled(Content);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
