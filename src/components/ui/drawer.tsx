"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { drawer, type DrawerVariantProps } from "styled-system/recipes";

const classes = drawer();

const Root = DrawerPrimitive.Root;
Root.displayName = "Drawer";

const Trigger = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) => (
  <DrawerPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = "DrawerTrigger";

const DrawerPortal = DrawerPrimitive.Portal;
DrawerPortal.displayName = "DrawerPortal";

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const StyledOverlay = styled(Overlay);
StyledOverlay.displayName = "DrawerOverlay";

const Close = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Close>) => (
  <DrawerPrimitive.Close className={cx(classes.close, className)} {...props} />
);
const StyledClose = styled(Close);
StyledClose.displayName = "DrawerClose";

const Content = ({
  className,
  side,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & DrawerVariantProps) => (
  <DrawerPortal>
    <StyledOverlay />
    <DrawerPrimitive.Content
      className={cx(drawer({ side }).content, className)}
      data-slot="drawer-content"
      {...props}
    >
      {children}
      <StyledClose css={{ pos: "absolute", top: "4", right: "4", cursor: "pointer" }}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </StyledClose>
    </DrawerPrimitive.Content>
  </DrawerPortal>
);
const StyledContent = styled(Content);
StyledContent.displayName = "DrawerContent";

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const StyledHeader = styled(Header);
StyledHeader.displayName = "DrawerHeader";

const Title = ({ className, ...props }: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const StyledTitle = styled(Title);
StyledTitle.displayName = "DrawerTitle";

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
  <DrawerPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const StyledDescription = styled(Description);
StyledDescription.displayName = "DrawerDescription";

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
const StyledFooter = styled(Footer);
StyledFooter.displayName = "DrawerFooter";

const Drawer = {
  Root,
  Trigger: StyledTrigger,
  Content: StyledContent,
  Header: StyledHeader,
  Title: StyledTitle,
  Description: StyledDescription,
  Footer: StyledFooter,
  Close: StyledClose,
  Overlay: StyledOverlay,
  Portal: DrawerPortal,
};

export { Drawer };
