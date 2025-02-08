"use client";

import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { dialog } from "styled-system/recipes";
import { createStyleContext } from "@/lib/style-context";

const { withProvider, withContext } = createStyleContext(dialog);

const Dialog = withProvider(DialogPrimitive.Root, "root");
const DialogTrigger = withContext(DialogPrimitive.Trigger, "trigger");
const DialogPortal = withContext(DialogPrimitive.Portal, "portal");
const DialogOverlay = withContext(DialogPrimitive.Overlay, "overlay");
const DialogClose = withContext(DialogPrimitive.Close, "close");

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content className={className} {...props}>
      {children}
      <DialogClose pos="absolute" top="4" right="4" cursor="pointer">
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={visuallyHidden()}>Close</span>
      </DialogClose>
    </DialogPrimitive.Content>
  </DialogPortal>
);

const DialogContent = withContext(Content, "content");
const DialogHeader = withContext("div", "header");
const DialogTitle = withContext(DialogPrimitive.Title, "title");
const DialogDescription = withContext(DialogPrimitive.Description, "description");
const DialogFooter = withContext("div", "footer");

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
};
