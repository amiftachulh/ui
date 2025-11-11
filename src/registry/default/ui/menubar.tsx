"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { menubar } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(menubar);

const Menubar = withProvider(MenubarPrimitive.Root, "root", {
  defaultProps: {
    "data-slot": "menubar",
  },
});

const MenubarMenu = withContext(MenubarPrimitive.Menu, "menu", {
  defaultProps: {
    "data-slot": "menubar-menu",
  },
});

const MenubarGroup = withContext(MenubarPrimitive.Group, "group", {
  defaultProps: {
    "data-slot": "menubar-group",
  },
});

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarRadioGroup = withContext(MenubarPrimitive.RadioGroup, "radioGroup", {
  defaultProps: {
    "data-slot": "menubar-radio-group",
  },
});

const MenubarTrigger = withContext(MenubarPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "menubar-trigger",
  },
});

function Content({
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        {...props}
      />
    </MenubarPortal>
  );
}
const MenubarContent = withContext(Content, "content");

function Item({
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & { inset?: boolean }) {
  return <MenubarPrimitive.Item data-slot="menubar-item" data-inset={inset} {...props} />;
}
const MenubarItem = withContext(Item, "item");

function CheckboxItem({
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem data-slot="menubar-checkbox-item" checked={checked} {...props}>
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
        <MenubarPrimitive.ItemIndicator>
          <LuCheck className={css({ w: "4", h: "4" })} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}
const MenubarCheckboxItem = withContext(CheckboxItem, "checkboxItem");

function RadioItem({
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem data-slot="menubar-radio-item" {...props}>
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
        <MenubarPrimitive.ItemIndicator>
          <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}
const MenubarRadioItem = withContext(RadioItem, "radioItem");

function Label({
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & { inset?: boolean }) {
  return <MenubarPrimitive.Label data-slot="menubar-label" data-inset={inset} {...props} />;
}
const MenubarLabel = withContext(Label, "label");

const MenubarSeparator = withContext(MenubarPrimitive.Separator, "separator", {
  defaultProps: {
    "data-slot": "menubar-separator",
  },
});

const MenubarShortcut = withContext("span", "shortcut", {
  defaultProps: {
    "data-slot": "menubar-shortcut",
  },
});

const MenubarSub = MenubarPrimitive.Sub;

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <MenubarPrimitive.SubTrigger data-slot="menubar-sub-trigger" data-inset={inset} {...props}>
      {children}
      <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
    </MenubarPrimitive.SubTrigger>
  );
}
const MenubarSubTrigger = withContext(SubTrigger, "subTrigger");

const MenubarSubContent = withContext(MenubarPrimitive.SubContent, "subContent", {
  defaultProps: {
    "data-slot": "menubar-sub-content",
  },
});

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};
