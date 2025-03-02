"use client";

import * as React from "react";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { vaul } from "styled-system/recipes";
import { Drawer as VaulPrimitive } from "vaul";

const classes = vaul();

function Vaul(props: React.ComponentProps<typeof VaulPrimitive.Root>) {
  return <VaulPrimitive.Root {...props} />;
}

const VaulTrigger = styled(VaulPrimitive.Trigger);
VaulTrigger.displayName = "VaulTrigger";

const VaulPortal = VaulPrimitive.Portal;

const VaulClose = styled(VaulPrimitive.Close);
VaulClose.displayName = "VaulClose";

function Overlay({ className, ...props }: React.ComponentProps<typeof VaulPrimitive.Overlay>) {
  return <VaulPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />;
}
const VaulOverlay = styled(Overlay);
VaulOverlay.displayName = "VaulOverlay";

function Content({
  className,
  children,
  ...props
}: React.ComponentProps<typeof VaulPrimitive.Content>) {
  return (
    <VaulPortal>
      <VaulOverlay />
      <VaulPrimitive.Content className={cx(classes.content, className)} {...props}>
        <div
          className={css({ mx: "auto", mt: "4", h: "2", w: "100px", rounded: "full", bg: "muted" })}
        />
        {children}
      </VaulPrimitive.Content>
    </VaulPortal>
  );
}
const VaulContent = styled(Content);
VaulContent.displayName = "VaulContent";

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.header, className)} {...props} />;
}
const VaulHeader = styled(Header);
VaulHeader.displayName = "VaulHeader";

function Title({ className, ...props }: React.ComponentProps<typeof VaulPrimitive.Title>) {
  return <VaulPrimitive.Title className={cx(classes.title, className)} {...props} />;
}
const VaulTitle = styled(Title);
VaulTitle.displayName = "VaulTitle";

function Description({
  className,
  ...props
}: React.ComponentProps<typeof VaulPrimitive.Description>) {
  return <VaulPrimitive.Description className={cx(classes.description, className)} {...props} />;
}
const VaulDescription = styled(Description);
VaulDescription.displayName = "VaulDescription";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.footer, className)} {...props} />;
}
const VaulFooter = styled(Footer);
VaulFooter.displayName = "VaulFooter";

export {
  Vaul,
  VaulTrigger,
  VaulPortal,
  VaulClose,
  VaulOverlay,
  VaulContent,
  VaulHeader,
  VaulTitle,
  VaulDescription,
  VaulFooter,
};
