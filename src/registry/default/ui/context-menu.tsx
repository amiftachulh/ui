"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { contextMenu } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(contextMenu);

const ContextMenu = withRootProvider(ContextMenuPrimitive.Root);

const ContextMenuTrigger = withContext(ContextMenuPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "context-menu-trigger",
  },
});

const ContextMenuGroup = withContext(ContextMenuPrimitive.Group, "group", {
  defaultProps: {
    "data-slot": "context-menu-group",
  },
});

const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = withContext(ContextMenuPrimitive.RadioGroup, "radioGroup", {
  defaultProps: {
    "data-slot": "context-menu-radio-group",
  },
});

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      {...props}
    >
      {children}
      <LuChevronRight className={css({ ml: "auto" })} />
    </ContextMenuPrimitive.SubTrigger>
  );
}
const ContextMenuSubTrigger = withContext(SubTrigger, "subTrigger");

const ContextMenuSubContent = withContext(ContextMenuPrimitive.SubContent, "subContent", {
  defaultProps: {
    "data-slot": "context-menu-sub-content",
  },
});

function Content(props: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content data-slot="context-menu-content" {...props} />
    </ContextMenuPrimitive.Portal>
  );
}
const ContextMenuContent = withContext(Content, "content");

function Item({
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "danger";
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      {...props}
    />
  );
}
const ContextMenuItem = withContext(Item, "item");

function CheckboxItem({
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem data-slot="context-menu-checkbox-item" {...props}>
      <span
        className={css({
          pos: "absolute",
          left: "2",
          display: "flex",
          w: "3.5",
          h: "3.5",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        })}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <LuCheck />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}
const ContextMenuCheckboxItem = withContext(CheckboxItem, "checkboxItem");

function RadioItem({
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem data-slot="context-menu-radio-item" {...props}>
      <span
        className={css({
          pos: "absolute",
          left: "2",
          display: "flex",
          w: "3.5",
          h: "3.5",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        })}
      >
        <ContextMenuPrimitive.ItemIndicator>
          <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}
const ContextMenuRadioItem = withContext(RadioItem, "radioItem");

function Label({
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.Label data-slot="context-menu-label" data-inset={inset} {...props} />
  );
}
const ContextMenuLabel = withContext(Label, "label");

const ContextMenuSeparator = withContext(ContextMenuPrimitive.Separator, "separator", {
  defaultProps: {
    "data-slot": "context-menu-separator",
  },
});

const ContextMenuShortcut = withContext("span", "shortcut", {
  defaultProps: {
    "data-slot": "context-menu-shortcut",
  },
});

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuRadioGroup,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
};
