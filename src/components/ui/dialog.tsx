"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";

const classes = dialog();

const Dialog = DialogPrimitive.Root;

function Trigger({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      className={cx(classes.trigger, className)}
      {...props}
    />
  );
}
const DialogTrigger = styled(Trigger);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

function Overlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cx(classes.overlay, className)}
      {...props}
    />
  );
}
const DialogOverlay = styled(Overlay);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

function Close({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      className={cx(classes.close, className)}
      {...props}
    />
  );
}
const DialogClose = styled(Close);
DialogClose.displayName = DialogPrimitive.Close.displayName;

function Content({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cx(classes.content, className)}
        {...props}
      >
        {children}
        <DialogClose pos="absolute" top="4" right="4" cursor="pointer">
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={css({ srOnly: true })}>Close</span>
        </DialogClose>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
const DialogContent = styled(Content);
DialogContent.displayName = DialogPrimitive.Content.displayName;

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" className={cx(classes.header, className)} {...props} />;
}
const DialogHeader = styled(Header);
DialogHeader.displayName = "DialogHeader";

function Title({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cx(classes.title, className)}
      {...props}
    />
  );
}
const DialogTitle = styled(Title);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

function Description({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}
const DialogDescription = styled(Description);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-footer" className={cx(classes.footer, className)} {...props} />;
}
const DialogFooter = styled(Footer);
DialogFooter.displayName = "DialogFooter";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogOverlay,
  DialogClose,
};
