"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { drawer, type DrawerVariantProps } from "styled-system/recipes";

const classes = drawer();

const Drawer = DrawerPrimitive.Root;
Drawer.displayName = "Drawer";

const DrawerTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) => (
  <DrawerPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerPortal = DrawerPrimitive.Portal;
DrawerPortal.displayName = "DrawerPortal";

const DrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerClose = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) => (
  <DrawerPrimitive.Close className={cx(classes.close, className)} {...props} />
);
DrawerClose.displayName = "DrawerClose";

const DrawerContent = ({
  className,
  side,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & DrawerVariantProps) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={cx(drawer({ side }).content, className)}
      data-slot="drawer-content"
      {...props}
    >
      {children}
      <DrawerClose className={css({ pos: "absolute", top: "4", right: "4", cursor: "pointer" })}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </DrawerClose>
    </DrawerPrimitive.Content>
  </DrawerPortal>
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={cx(classes.title, className)} {...props} />
);
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={cx(classes.description, className)} {...props} />
);
DrawerDescription.displayName = "DrawerDescription";

const DrawerFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay,
  DrawerPortal,
};
