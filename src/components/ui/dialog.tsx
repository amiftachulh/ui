"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dialog } from "styled-system/recipes";

const classes = dialog();

const Trigger = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => (
  <DialogPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

const Overlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cx(classes.overlay, className)} {...props} />
);
const StyledOverlay = styled(Overlay);
StyledOverlay.displayName = DialogPrimitive.Overlay.displayName;

const Close = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close className={cx(classes.close, className)} {...props} />
);
const StyledClose = styled(Close);
StyledClose.displayName = DialogPrimitive.Close.displayName;

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <StyledOverlay />
    <DialogPrimitive.Content className={cx(classes.content, className)} {...props}>
      {children}
      <StyledClose css={{ pos: "absolute", top: "4", right: "4", cursor: "pointer" }}>
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={css({ srOnly: true })}>Close</span>
      </StyledClose>
    </DialogPrimitive.Content>
  </DialogPortal>
);
const StyledContent = styled(Content);
StyledContent.displayName = DialogPrimitive.Content.displayName;

const Header = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.header, className)} {...props} />
);
const StyledHeader = styled(Header);
StyledHeader.displayName = "DialogHeader";

const Title = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cx(classes.title, className)} {...props} />
);
const StyledTitle = styled(Title);
StyledTitle.displayName = DialogPrimitive.Title.displayName;

const Description = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description className={cx(classes.description, className)} {...props} />
);
const StyledDescription = styled(Description);
StyledDescription.displayName = DialogPrimitive.Description.displayName;

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.footer, className)} {...props} />
);
const StyledFooter = styled(Footer);
StyledFooter.displayName = "DialogFooter";

const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: StyledTrigger,
  Content: StyledContent,
  Header: StyledHeader,
  Title: StyledTitle,
  Description: StyledDescription,
  Footer: StyledFooter,
  Close: StyledClose,
  Overlay: StyledOverlay,
  Portal: DialogPortal,
};

export { Dialog };
