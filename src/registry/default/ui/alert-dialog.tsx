"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cx } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { alertDialog, button } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(alertDialog);

const AlertDialog = withRootProvider(AlertDialogPrimitive.Root);

const AlertDialogTrigger = withContext(AlertDialogPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "alert-dialog-trigger",
  },
});

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = withContext(AlertDialogPrimitive.Overlay, "overlay", {
  defaultProps: {
    "data-slot": "alert-dialog-overlay",
  },
});

function Content(props: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content data-slot="alert-dialog-content" {...props} />
    </AlertDialogPortal>
  );
}
const AlertDialogContent = withContext(Content, "content");

const AlertDialogHeader = withContext("div", "header", {
  defaultProps: {
    "data-slot": "alert-dialog-header",
  },
});

const AlertDialogTitle = withContext(AlertDialogPrimitive.Title, "title", {
  defaultProps: {
    "data-slot": "alert-dialog-title",
  },
});

const AlertDialogDescription = withContext(AlertDialogPrimitive.Description, "description", {
  defaultProps: {
    "data-slot": "alert-dialog-description",
  },
});

const AlertDialogFooter = withContext("div", "footer", {
  defaultProps: {
    "data-slot": "alert-dialog-footer",
  },
});

function Action({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      data-slot="alert-dialog-action"
      className={cx(button(), className)}
      {...props}
    />
  );
}
const AlertDialogAction = withContext(Action, "action");

function Cancel({ className, ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      data-slot="alert-dialog-cancel"
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
