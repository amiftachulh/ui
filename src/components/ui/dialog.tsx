"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css } from "styled-system/css";
import { dialog } from "styled-system/recipes";
import { createStyleContext } from "@/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(dialog);

const Dialog = withRootProvider(DialogPrimitive.Root);
const DialogTrigger = withContext(DialogPrimitive.Trigger, "trigger");
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = withContext(DialogPrimitive.Overlay, "overlay");
const DialogClose = withContext(DialogPrimitive.Close, "close");

function Content({
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content {...props}>
        {children}
        {showCloseButton && (
          <DialogClose
            css={{
              pos: "absolute",
              top: "4",
              right: "4",
              opacity: "0.7",
              transition: "opacity",
              rounded: "xs",
              _hover: {
                opacity: "1",
              },
              _focusVisible: {
                outlineWidth: "2px",
                outlineColor: "ring",
                outlineOffset: "2px",
              },
              _disabled: {
                pointerEvents: "none",
              },
              _open: {
                bg: "accent",
                color: "accent.fg",
              },
              "& svg": {
                w: "4",
                h: "4",
                flexShrink: "0",
                pointerEvents: "none",
              },
            }}
          >
            <LuX />
            <span className={css({ srOnly: true })}>Close</span>
          </DialogClose>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}
const DialogContent = withContext(Content, "content");

const DialogHeader = withContext("div", "header");
const DialogTitle = withContext(DialogPrimitive.Title, "title");
const DialogDescription = withContext(DialogPrimitive.Description, "description");
const DialogFooter = withContext("div", "footer");

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
