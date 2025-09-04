"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { css } from "styled-system/css";
import { menubar } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(menubar);

const Menubar = withProvider(MenubarPrimitive.Root, "root");
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = withContext(MenubarPrimitive.Group, "group");
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarRadioGroup = withContext(MenubarPrimitive.RadioGroup, "radioGroup");
const MenubarTrigger = withContext(MenubarPrimitive.Trigger, "trigger");

function Content({
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
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
  return <MenubarPrimitive.Item data-inset={inset} {...props} />;
}
const MenubarItem = withContext(Item, "item");

function CheckboxItem({
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem checked={checked} {...props}>
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
    <MenubarPrimitive.RadioItem {...props}>
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
  return <MenubarPrimitive.Label data-inset={inset} {...props} />;
}
const MenubarLabel = withContext(Label, "label");

const MenubarSeparator = withContext(MenubarPrimitive.Separator, "separator");
const MenubarShortcut = withContext("span", "shortcut");
const MenubarSub = MenubarPrimitive.Sub;

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <MenubarPrimitive.SubTrigger data-inset={inset} {...props}>
      {children}
      <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
    </MenubarPrimitive.SubTrigger>
  );
}
const MenubarSubTrigger = withContext(SubTrigger, "subTrigger");

const MenubarSubContent = withContext(MenubarPrimitive.SubContent, "subContent");

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
