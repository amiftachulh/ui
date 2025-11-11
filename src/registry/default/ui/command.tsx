"use client";

import * as React from "react";
import { LuSearch } from "react-icons/lu";
import { Command as CommandPrimitive } from "cmdk";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { command } from "styled-system/recipes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/default/ui/dialog";

const classes = command();

const { withProvider, withContext } = createStyleContext(command);

const Command = withProvider(CommandPrimitive, "root");

function CommandDialog({
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

function Input(props: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrappper"
      className={css({ display: "flex", alignItems: "center", borderBottomWidth: "1px", px: "3" })}
    >
      <LuSearch className={css({ mr: "2", w: "4", h: "4", flexShrink: "0", opacity: "0.5" })} />
      <CommandPrimitive.Input {...props} />
    </div>
  );
}
const CommandInput = withContext(Input, "input");

const CommandList = withContext(CommandPrimitive.List, "list", {
  defaultProps: {
    "data-slot": "command-list",
  },
});

const CommandEmpty = withContext(CommandPrimitive.Empty, "empty", {
  defaultProps: {
    "data-slot": "command-empty",
  },
});

const CommandGroup = withContext(CommandPrimitive.Group, "group", {
  defaultProps: {
    "data-slot": "command-group",
  },
});

const CommandSeparator = withContext(CommandPrimitive.Separator, "separator", {
  defaultProps: {
    "data-slot": "command-separator",
  },
});

const CommandItem = withContext(CommandPrimitive.Item, "item", {
  defaultProps: {
    "data-slot": "command-item",
  },
});

const CommandShortcut = withContext("span", "shortcut", {
  defaultProps: {
    "data-slot": "command-shortcut",
  },
});

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
