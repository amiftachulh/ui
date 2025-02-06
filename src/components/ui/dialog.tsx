"use client";

import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { dialog } from "styled-system/recipes";
import { createStyleContext } from "@/lib/style-context";

const { withProvider, withContext } = createStyleContext(dialog);

const Dialog = withProvider(styled(DialogPrimitive.Root), "root");
const DialogTrigger = withContext(styled(DialogPrimitive.Trigger), "trigger");
const DialogPortal = withContext(styled(DialogPrimitive.Portal), "portal");
const DialogOverlay = withContext(styled(DialogPrimitive.Overlay), "overlay");
const DialogHeader = withContext(styled.div, "header");
const DialogTitle = withContext(styled(DialogPrimitive.Title), "title");
const DialogDescription = withContext(styled(DialogPrimitive.Description), "description");
const DialogFooter = withContext(styled.div, "footer");
const DialogClose = withContext(styled(DialogPrimitive.Close), "close");
const DialogContentBase = withContext(styled(DialogPrimitive.Content), "content");

const DialogContent = ({ children, ...props }: React.ComponentProps<typeof DialogContentBase>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogContentBase {...props}>
      {children}
      <DialogClose pos="fixed" top="4" right="4">
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={visuallyHidden()}>Close</span>
      </DialogClose>
    </DialogContentBase>
  </DialogPortal>
);
DialogContent.displayName = "DialogContent";

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
