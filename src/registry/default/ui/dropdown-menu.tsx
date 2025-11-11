"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { dropdownMenu } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(dropdownMenu);

const DropdownMenu = withRootProvider(DropdownMenuPrimitive.Root);

const DropdownMenuTrigger = withContext(DropdownMenuPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "dropdown-menu-trigger",
  },
});

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

function Content({
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPortal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenuPortal>
  );
}
const DropdownMenuContent = withContext(Content, "content");

const DropdownMenuGroup = withContext(DropdownMenuPrimitive.Group, "group", {
  defaultProps: {
    "data-slot": "dropdown-menu-group",
  },
});

function Item({
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  variant?: "default" | "danger";
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      {...props}
    />
  );
}
const DropdownMenuItem = withContext(Item, "item");

function CheckboxItem({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem data-slot="dropdown-menu-checkbox-item" {...props}>
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
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCheck className={css({ w: "4", h: "4" })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
const DropdownMenuCheckboxItem = withContext(CheckboxItem, "checkboxItem");

const DropdownMenuRadioGroup = withContext(DropdownMenuPrimitive.RadioGroup, "radioGroup", {
  defaultProps: {
    "data-slot": "dropdown-menu-radio-group",
  },
});

function RadioItem({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem data-slot="dropdown-menu-radio-item" {...props}>
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
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}
const DropdownMenuRadioItem = withContext(RadioItem, "radioItem");

function Label({
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.Label data-slot="dropdown-menu-label" data-inset={inset} {...props} />
  );
}
const DropdownMenuLabel = withContext(Label, "label");

const DropdownMenuSeparator = withContext(DropdownMenuPrimitive.Separator, "separator", {
  defaultProps: {
    "data-slot": "dropdown-menu-separator",
  },
});

const DropdownMenuShortcut = withContext("span", "shortcut", {
  defaultProps: {
    "data-slot": "dropdown-menu-shortcut",
  },
});

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      {...props}
    >
      {children}
      <LuChevronRight className={css({ ml: "auto" })} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}
const DropdownMenuSubTrigger = withContext(SubTrigger, "subTrigger");

const DropdownMenuSubContent = withContext(DropdownMenuPrimitive.SubContent, "subContent", {
  defaultProps: {
    "data-slot": "dropdown-menu-sub-content",
  },
});

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
};
