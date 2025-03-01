"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { popover } from "styled-system/recipes";

const classes = popover();

const Popover = PopoverPrimitive.Root;

function Trigger(props: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}
const PopoverTrigger = styled(Trigger);
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

function Content({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        className={cx(classes.content, className)}
        align={align}
        sideOffset={sideOffset}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
const PopoverContent = styled(Content);
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
