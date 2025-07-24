"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cx } from "styled-system/css";
import { alertDialog, button } from "styled-system/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(alertDialog);

const AlertDialog = withRootProvider(AlertDialogPrimitive.Root);
const AlertDialogTrigger = withContext(AlertDialogPrimitive.Trigger, "trigger");
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = withContext(AlertDialogPrimitive.Overlay, "overlay");

function Content(props: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content {...props} />
    </AlertDialogPortal>
  );
}
const AlertDialogContent = withContext(Content, "content");

const AlertDialogHeader = withContext("div", "header");
const AlertDialogTitle = withContext(AlertDialogPrimitive.Title, "title");
const AlertDialogDescription = withContext(AlertDialogPrimitive.Description, "description");
const AlertDialogFooter = withContext("div", "footer");

function Action({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return <AlertDialogPrimitive.Action className={cx(button(), className)} {...props} />;
}
const AlertDialogAction = withContext(Action, "action");

function Cancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cx(button({ variant: "outline" }), className)}
      {...props}
    />
  );
}
const AlertDialogCancel = withContext(Cancel, "cancel");

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
