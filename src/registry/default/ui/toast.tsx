"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { toast, type ToastVariantProps } from "styled-system/recipes";

const classes = toast();

const ToastProvider = ToastPrimitive.Provider;

function Viewport({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cx(classes.viewport, className)}
      {...props}
    />
  );
}
const ToastViewport = styled(Viewport);
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

function Root({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> & ToastVariantProps) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cx("group", toast({ variant }).root, className)}
      {...props}
    />
  );
}
const Toast = styled(Root);
Toast.displayName = ToastPrimitive.Root.displayName;

function Action({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Action>) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      className={cx(classes.action, className)}
      {...props}
    />
  );
}
const ToastAction = styled(Action);
ToastAction.displayName = ToastPrimitive.Action.displayName;

function Close({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      className={cx(classes.close, className)}
      {...props}
    >
      <LuX className={css({ w: "4", h: "4" })} />
    </ToastPrimitive.Close>
  );
}
const ToastClose = styled(Close);
ToastClose.displayName = ToastPrimitive.Close.displayName;

function Title({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cx(classes.title, className)}
      {...props}
    />
  );
}
const ToastTitle = styled(Title);
ToastTitle.displayName = ToastPrimitive.Title.displayName;

function Description({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cx(classes.description, className)}
      {...props}
    />
  );
}
const ToastDescription = styled(Description);
ToastDescription.displayName = ToastPrimitive.Description.displayName;

type ToastProps = React.ComponentProps<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
