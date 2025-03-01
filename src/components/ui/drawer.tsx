"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { drawer, type DrawerVariantProps } from "styled-system/recipes";

const classes = drawer();

const Drawer = DrawerPrimitive.Root;
Drawer.displayName = "Drawer";

function Trigger({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <DrawerPrimitive.Trigger
      data-slot="drawer-trigger"
      className={cx(classes.trigger, className)}
      {...props}
    />
  );
}
const DrawerTrigger = styled(Trigger);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerPortal = DrawerPrimitive.Portal;
DrawerPortal.displayName = "DrawerPortal";

function Overlay({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cx(classes.overlay, className)}
      {...props}
    />
  );
}
const DrawerOverlay = styled(Overlay);
DrawerOverlay.displayName = "DrawerOverlay";

function Close({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return (
    <DrawerPrimitive.Close
      data-slot="drawer-close"
      className={cx(classes.close, className)}
      {...props}
    />
  );
}
const DrawerClose = styled(Close);
DrawerClose.displayName = "DrawerClose";

function Content({
  className,
  side,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & DrawerVariantProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cx(drawer({ side }).content, className)}
        {...props}
      >
        {children}
        <DrawerClose pos="absolute" top="4" right="4" cursor="pointer">
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={css({ srOnly: true })}>Close</span>
        </DrawerClose>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}
const DrawerContent = styled(Content);
DrawerContent.displayName = "DrawerContent";

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" className={cx(classes.header, className)} {...props} />;
}
const DrawerHeader = styled(Header);
DrawerHeader.displayName = "DrawerHeader";

function Title({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cx(classes.title, className)}
      {...props}
    />
  );
}
const DrawerTitle = styled(Title);
DrawerTitle.displayName = "DrawerTitle";

function Description({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}
const DrawerDescription = styled(Description);
DrawerDescription.displayName = "DrawerDescription";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-footer" className={cx(classes.footer, className)} {...props} />;
}
const DrawerFooter = styled(Footer);
DrawerFooter.displayName = "DrawerFooter";

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerOverlay,
  DrawerClose,
};
