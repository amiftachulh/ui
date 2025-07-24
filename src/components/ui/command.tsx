"use client";

import * as React from "react";
import { LuSearch } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { command } from "styled-system/recipes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createStyleContext } from "@/lib/create-style-context";

const classes = command();

const { withProvider, withContext } = createStyleContext(command);

const Command = withProvider(CommandPrimitive, "root");

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

function Input(props: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
      cmdk-input-wrapper=""
    >
      <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
      <CommandPrimitive.Input {...props} />
    </div>
  );
}
const CommandInput = withContext(Input, "input");
const CommandList = withContext(CommandPrimitive.List, "list");
const CommandEmpty = withContext(CommandPrimitive.Empty, "empty");
const CommandGroup = withContext(CommandPrimitive.Group, "group");
const CommandSeparator = withContext(CommandPrimitive.Separator, "separator");
const CommandItem = withContext(CommandPrimitive.Item, "item");
const CommandShortcut = withContext("span", "shortcut");

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
