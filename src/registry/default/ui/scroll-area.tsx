"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scrollArea } from "styled-system/recipes";

const classes = scrollArea();

function Root({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root className={cx(classes.root, className)} {...props}>
      <ScrollAreaPrimitive.Viewport className={classes.viewport}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <Scrollbar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
const ScrollArea = styled(Root);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

function ScrollbarBase({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cx(classes.scrollAreaScrollbar, className)}
      orientation={orientation}
      data-orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className={classes.scrollAreaThumb} />
    </ScrollAreaPrimitive.Scrollbar>
  );
}
const Scrollbar = styled(ScrollbarBase);
Scrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export { ScrollArea, Scrollbar };
