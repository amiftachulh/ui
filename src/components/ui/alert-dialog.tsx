"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { alertDialog, button } from "styled-system/recipes";

const classes = alertDialog();

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = styled(AlertDialogPrimitive.Trigger);
AlertDialogTrigger.displayName = AlertDialogPrimitive.Trigger.displayName;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

function Overlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cx(classes.overlay, className)}
      {...props}
    />
  );
}
const AlertDialogOverlay = styled(Overlay);
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

function Content({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cx(classes.content, className)}
        {...props}
      />
    </AlertDialogPortal>
  );
}
const AlertDialogContent = styled(Content);
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-header" className={cx(classes.header, className)} {...props} />
  );
}
const AlertDialogHeader = styled(Header);
AlertDialogHeader.displayName = "AlertDialogHeader";

function Title({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cx(classes.title, className)}
      {...props}
    />
  );
}
const AlertDialogTitle = styled(Title);
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

function Description({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}
const AlertDialogDescription = styled(Description);
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-dialog-footer" className={cx(classes.footer, className)} {...props} />
  );
}
const AlertDialogFooter = styled(Footer);
AlertDialogFooter.displayName = "AlertDialogFooter";

function Action({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      className={cx(button(), classes.action, className)}
      {...props}
    />
  );
}
const AlertDialogAction = styled(Action);
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

function Cancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
      className={cx(button({ variant: "outline" }), classes.cancel, className)}
      {...props}
    />
  );
}
const AlertDialogCancel = styled(Cancel);
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
};
