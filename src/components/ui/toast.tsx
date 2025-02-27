import * as React from "react";
import { LuX } from "react-icons/lu";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { toast, type ToastVariantProps } from "styled-system/recipes";

const classes = toast();

const ToastProvider = ToastPrimitive.Provider;

const Viewport = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) => (
  <ToastPrimitive.Viewport className={cx(classes.viewport, className)} {...props} />
);
const ToastViewport = styled(Viewport);
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const Root = ({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> & ToastVariantProps) => {
  return (
    <ToastPrimitive.Root className={cx("group", toast({ variant }).root, className)} {...props} />
  );
};
const Toast = styled(Root);
Toast.displayName = ToastPrimitive.Root.displayName;

const Action = ({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Action>) => (
  <ToastPrimitive.Action
    className={cx(classes.action, className)}
    data-slot="toast-action"
    {...props}
  />
);
const ToastAction = styled(Action);
ToastAction.displayName = ToastPrimitive.Action.displayName;

const Close = ({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) => (
  <ToastPrimitive.Close
    className={cx(classes.close, className)}
    data-slot="toast-close"
    toast-close=""
    {...props}
  >
    <LuX className={css({ w: "4", h: "4" })} />
  </ToastPrimitive.Close>
);
const ToastClose = styled(Close);
ToastClose.displayName = ToastPrimitive.Close.displayName;

const Title = ({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) => (
  <ToastPrimitive.Title
    className={cx(classes.title, className)}
    data-slot="toast-title"
    {...props}
  />
);
const ToastTitle = styled(Title);
ToastTitle.displayName = ToastPrimitive.Title.displayName;

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) => (
  <ToastPrimitive.Description
    className={cx(classes.description, className)}
    data-slot="toast-description"
    {...props}
  />
);
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
