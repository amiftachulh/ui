"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { dialog } from "styled-system/recipes";

const classes = dialog();

const Dialog = DialogPrimitive.Root;

const DialogTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) => (
  <DialogPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogClose = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close className={cx(classes.close, className)} {...props} />
);
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content className={cx(classes.content, className)} {...props}>
      {children}
      <DialogClose className={css({ pos: "absolute", top: "4", right: "4", cursor: "pointer" })}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cx(classes.title, className)} {...props} />
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description className={cx(classes.description, className)} {...props} />
);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogOverlay,
  DialogPortal,
};
