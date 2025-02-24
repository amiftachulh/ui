"use client";

import * as React from "react";
import { LuSearch } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { command } from "styled-system/recipes";
import { Dialog } from "@/components/ui/dialog";

const classes = command();

const Root = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive className={cx(classes.root, className)} {...props} />
);
const StyledRoot = styled(Root);
StyledRoot.displayName = "Command";

const DialogWrapper = ({
  title = "Command Palette",
  description = "Search for a command...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Root> & {
  title?: string;
  description?: string;
}) => (
  <Dialog.Root {...props}>
    <Dialog.Header className={css({ srOnly: true })}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
    </Dialog.Header>
    <Dialog.Content className={css({ overflow: "hidden", p: "0", shadow: "lg" })}>
      <StyledRoot className={classes.dialog}>{children}</StyledRoot>
    </Dialog.Content>
  </Dialog.Root>
);
const StyledDialog = styled(DialogWrapper);
StyledDialog.displayName = "CommandDialog";

const Input = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <div
    className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
    cmdk-input-wrapper=""
  >
    <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
    <CommandPrimitive.Input className={cx(classes.input, className)} {...props} />
  </div>
);
const StyledInput = styled(Input);
StyledInput.displayName = "CommandInput";

const List = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List className={cx(classes.list, className)} {...props} />
);
const StyledList = styled(List);
StyledList.displayName = "CommandList";

const Empty = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty className={cx(classes.empty, className)} {...props} />
);
const StyledEmpty = styled(Empty);
StyledEmpty.displayName = "CommandEmpty";

const Group = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group className={cx(classes.group, className)} {...props} />
);
const StyledGroup = styled(Group);
StyledGroup.displayName = "CommandGroup";

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const StyledSeparator = styled(Separator);
StyledSeparator.displayName = "CommandSeparator";

const Item = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item className={cx(classes.item, className)} {...props} />
);
const StyledItem = styled(Item);
StyledItem.displayName = "CommandItem";

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const StyledShortcut = styled(Shortcut);
StyledShortcut.displayName = "CommandShortcut";

const Command = {
  Root: StyledRoot,
  Dialog: StyledDialog,
  Input: StyledInput,
  List: StyledList,
  Empty: StyledEmpty,
  Group: StyledGroup,
  Separator: StyledSeparator,
  Item: StyledItem,
  Shortcut: StyledShortcut,
};

export { Command };
