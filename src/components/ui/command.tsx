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

function Root({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return <CommandPrimitive className={cx(classes.root, className)} {...props} />;
}
const Command = styled(Root);
Command.displayName = "Command";

function CommandDialogBase({
  title = "Command Palette",
  description = "Search for a command...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader css={{ srOnly: "true" }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent css={{ overflow: "hidden", p: "0", shadow: "lg" }}>
        <Command className={classes.dialog}>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}
const CommandDialog = styled(CommandDialogBase);
CommandDialog.displayName = "CommandDialog";

function Input({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
      cmdk-input-wrapper=""
    >
      <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cx(classes.input, className)}
        {...props}
      />
    </div>
  );
}
const CommandInput = styled(Input);
CommandInput.displayName = "CommandInput";

function List({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cx(classes.list, className)}
      {...props}
    />
  );
}
const CommandList = styled(List);
CommandList.displayName = "CommandList";

function Empty({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cx(classes.empty, className)}
      {...props}
    />
  );
}
const CommandEmpty = styled(Empty);
CommandEmpty.displayName = "CommandEmpty";

function Group({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cx(classes.group, className)}
      {...props}
    />
  );
}
const CommandGroup = styled(Group);
CommandGroup.displayName = "CommandGroup";

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cx(classes.separator, className)}
      {...props}
    />
  );
}
const CommandSeparator = styled(Separator);
CommandSeparator.displayName = "CommandSeparator";

function Item({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cx(classes.item, className)}
      {...props}
    />
  );
}
const CommandItem = styled(Item);
CommandItem.displayName = "CommandItem";

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span data-slot="command-shortcut" className={cx(classes.shortcut, className)} {...props} />
  );
}
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
