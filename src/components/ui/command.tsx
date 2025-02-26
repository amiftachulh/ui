"use client";

import * as React from "react";
import { LuSearch } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { command } from "styled-system/recipes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const classes = command();

const Root = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive className={cx(classes.root, className)} {...props} />
);
const Command = styled(Root);
Command.displayName = "Command";

const DialogWrapper = ({
  title = "Command Palette",
  description = "Search for a command...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) => (
  <Dialog {...props}>
    <DialogHeader className={css({ srOnly: true })}>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <DialogContent className={css({ overflow: "hidden", p: "0", shadow: "lg" })}>
      <Command className={classes.dialog}>{children}</Command>
    </DialogContent>
  </Dialog>
);
const CommandDialog = styled(DialogWrapper);
CommandDialog.displayName = "CommandDialog";

const Input = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <div
    className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
    cmdk-input-wrapper=""
  >
    <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
    <CommandPrimitive.Input className={cx(classes.input, className)} {...props} />
  </div>
);
const CommandInput = styled(Input);
CommandInput.displayName = "CommandInput";

const List = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List className={cx(classes.list, className)} {...props} />
);
const CommandList = styled(List);
CommandList.displayName = "CommandList";

const Empty = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty className={cx(classes.empty, className)} {...props} />
);
const CommandEmpty = styled(Empty);
CommandEmpty.displayName = "CommandEmpty";

const Group = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group className={cx(classes.group, className)} {...props} />
);
const CommandGroup = styled(Group);
CommandGroup.displayName = "CommandGroup";

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const CommandSeparator = styled(Separator);
CommandSeparator.displayName = "CommandSeparator";

const Item = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item className={cx(classes.item, className)} {...props} />
);
const CommandItem = styled(Item);
CommandItem.displayName = "CommandItem";

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const CommandShortcut = styled(Shortcut);
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
  CommandItem,
  CommandShortcut,
};
