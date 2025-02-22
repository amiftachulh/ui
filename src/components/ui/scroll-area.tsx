import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cx } from "styled-system/css";
import { scrollArea } from "styled-system/recipes";

const classes = scrollArea();

const ScrollArea = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) => (
  <ScrollAreaPrimitive.Root className={cx(classes.root, className)} {...props}>
    <ScrollAreaPrimitive.Viewport className={classes.viewport}>
      {children}
    </ScrollAreaPrimitive.Viewport>
    <Scrollbar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const Scrollbar = ({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) => (
  <ScrollAreaPrimitive.Scrollbar
    className={cx(classes.scrollAreaScrollbar, className)}
    orientation={orientation}
    data-orientation={orientation}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className={classes.scrollAreaThumb} />
  </ScrollAreaPrimitive.Scrollbar>
);
Scrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export { ScrollArea, Scrollbar };
