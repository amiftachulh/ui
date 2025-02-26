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

const Trigger = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) => (
  <DrawerPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const DrawerTrigger = styled(Trigger);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerPortal = DrawerPrimitive.Portal;
DrawerPortal.displayName = "DrawerPortal";

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const DrawerOverlay = styled(Overlay);
DrawerOverlay.displayName = "DrawerOverlay";

const Close = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) => (
  <DrawerPrimitive.Close className={cx(classes.close, className)} {...props} />
);
const DrawerClose = styled(Close);
DrawerClose.displayName = "DrawerClose";

const Content = ({
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
      <DrawerClose css={{ pos: "absolute", top: "4", right: "4", cursor: "pointer" }}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </DrawerClose>
    </DrawerPrimitive.Content>
  </DrawerPortal>
);
const DrawerContent = styled(Content);
DrawerContent.displayName = "DrawerContent";

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const DrawerHeader = styled(Header);
DrawerHeader.displayName = "DrawerHeader";

const Title = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const DrawerTitle = styled(Title);
DrawerTitle.displayName = "DrawerTitle";

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const DrawerDescription = styled(Description);
DrawerDescription.displayName = "DrawerDescription";

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
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
