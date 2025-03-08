"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { menubar } from "styled-system/recipes";

const classes = menubar();

function Root({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root data-slot="menubar" className={cx(classes.root, className)} {...props} />
  );
}
const Menubar = styled(Root);
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = styled(MenubarPrimitive.Group);
MenubarGroup.displayName = MenubarPrimitive.Group.displayName;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarRadioGroup = styled(MenubarPrimitive.RadioGroup);
MenubarRadioGroup.displayName = MenubarPrimitive.RadioGroup.displayName;

function Trigger({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cx(classes.trigger, className)}
      {...props}
    />
  );
}
const MenubarTrigger = styled(Trigger);
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

function Content({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        className={cx(classes.content, className)}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        {...props}
      />
    </MenubarPortal>
  );
}

const MenubarContent = styled(Content);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

function Item({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & { inset?: boolean }) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      className={cx(classes.item, className)}
      data-inset={inset}
      {...props}
    />
  );
}
const MenubarItem = styled(Item);
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

function CheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cx(classes.checkboxItem, className)}
      checked={checked}
      {...props}
    >
      <span
        className={css({
          pos: "absolute",
          left: "2",
          display: "flex",
          w: "3.5",
          h: "3.5",
          alignItems: "center",
          justifyContent: "center",
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
const MenubarCheckboxItem = styled(CheckboxItem);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

function RadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cx(classes.radioItem, className)}
      {...props}
    >
      <span
        className={css({
          pos: "absolute",
          left: "2",
          display: "flex",
          w: "3.5",
          h: "3.5",
          alignItems: "center",
          justifyContent: "center",
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
const MenubarRadioItem = styled(RadioItem);
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

function Label({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & { inset?: boolean }) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      className={cx(classes.label, className)}
      data-inset={inset}
      {...props}
    />
  );
}
const MenubarLabel = styled(Label);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cx(classes.separator, className)}
      {...props}
    />
  );
}
const MenubarSeparator = styled(Separator);
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span data-slot="menubar-shortcut" className={cx(classes.shortcut, className)} {...props} />
  );
}
const MenubarShortcut = styled(Shortcut);
MenubarShortcut.displayName = "Shortcut";

const MenubarSub = MenubarPrimitive.Sub;

function SubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      className={cx(classes.subTrigger, className)}
      data-inset={inset}
      {...props}
    >
      {children}
      <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
    </MenubarPrimitive.SubTrigger>
  );
}
const MenubarSubTrigger = styled(SubTrigger);
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

function SubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cx(classes.subContent, className)}
      {...props}
    />
  );
}
const MenubarSubContent = styled(SubContent);
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

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
