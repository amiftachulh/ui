"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";

const classes = dialog();

const Dialog = DialogPrimitive.Root;

const Trigger = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => (
  <DialogPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const DialogTrigger = styled(Trigger);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const DialogOverlay = styled(Overlay);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const Close = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close className={cx(classes.close, className)} {...props} />
);
const DialogClose = styled(Close);
DialogClose.displayName = DialogPrimitive.Close.displayName;

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content className={cx(classes.content, className)} {...props}>
      {children}
      <DialogClose css={{ pos: "absolute", top: "4", right: "4", cursor: "pointer" }}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
);
const DialogContent = styled(Content);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const DialogHeader = styled(Header);
DialogHeader.displayName = "DialogHeader";

const Title = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const DialogTitle = styled(Title);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const DialogDescription = styled(Description);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
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
