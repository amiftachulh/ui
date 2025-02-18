import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cx } from "styled-system/css";
import { popover } from "styled-system/recipes";

const classes = popover();

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      className={cx(classes.content, className)}
      align={align}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPrimitive.Portal>
);
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
