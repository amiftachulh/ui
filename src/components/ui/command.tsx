"use client";

import * as React from "react";
import { LuSearch } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css, cx } from "styled-system/css";
import { command } from "styled-system/recipes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const classes = command();

const Command = ({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) => (
  <CommandPrimitive className={cx(classes.root, className)} {...props} />
);
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({
  title = "Command Palette",
  description = "Search for a command to run...",
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
CommandDialog.displayName = "CommandDialog";

const CommandInput = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) => (
  <div
    className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
    cmdk-input-wrapper=""
  >
    <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
    <CommandPrimitive.Input className={cx(classes.input, className)} {...props} />
  </div>
);
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) => (
  <CommandPrimitive.List className={cx(classes.list, className)} {...props} />
);
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) => (
  <CommandPrimitive.Empty className={cx(classes.empty, className)} {...props} />
);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) => (
  <CommandPrimitive.Group className={cx(classes.group, className)} {...props} />
);
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) => (
  <CommandPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = ({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) => (
  <CommandPrimitive.Item className={cx(classes.item, className)} {...props} />
);
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
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
