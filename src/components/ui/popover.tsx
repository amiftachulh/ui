import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { popover } from "styled-system/recipes";

const classes = popover();

const Root = PopoverPrimitive.Root;

const StyledTrigger = styled(PopoverPrimitive.Trigger);
StyledTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const Content = ({
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
const StyledContent = styled(Content);
StyledContent.displayName = "PopoverContent";

const Popover = {
  Root,
  Trigger: StyledTrigger,
  Content: StyledContent,
};

export { Popover };
