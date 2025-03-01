"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dropdownMenu } from "styled-system/recipes";

const classes = dropdownMenu();

const DropdownMenu = DropdownMenuPrimitive.Root;

function Trigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      className={cx(classes.trigger, className)}
      {...props}
    />
  );
}
const DropdownMenuTrigger = styled(Trigger);
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

function Content({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Content
      data-slot="dropdown-menu-content"
      className={cx(classes.content, className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
const DropdownMenuContent = styled(Content);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

function Item({
  className,
  insetLeft,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { insetLeft?: boolean }) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cx(classes.item, className)}
      data-inset={insetLeft}
      {...props}
    />
  );
}
const DropdownMenuItem = styled(Item);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

function Label({
  className,
  insetLeft,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { insetLeft?: boolean }) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      className={cx(classes.label, className)}
      data-inset={insetLeft}
      {...props}
    />
  );
}
const DropdownMenuLabel = styled(Label);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

function CheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cx(classes.checkboxItem, className)}
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
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCheck className={css({ w: "4", h: "4" })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}
const DropdownMenuCheckboxItem = styled(CheckboxItem);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

function RadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
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
        <DropdownMenuPrimitive.ItemIndicator>
          <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}
const DropdownMenuRadioItem = styled(RadioItem);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cx(classes.separator, className)}
      {...props}
    />
  );
}
const DropdownMenuSeparator = styled(Separator);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cx(classes.shortcut, className)}
      {...props}
    />
  );
}
const DropdownMenuShortcut = styled(Shortcut);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

function SubTrigger({
  className,
  insetLeft,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { insetLeft?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      className={cx(classes.subTrigger, className)}
      data-inset={insetLeft}
      {...props}
    >
      {children}
      <LuChevronRight className={css({ ml: "auto" })} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}
const DropdownMenuSubTrigger = styled(SubTrigger);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

function SubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cx(classes.subContent, className)}
      {...props}
    />
  );
}
const DropdownMenuSubContent = styled(SubContent);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

function Group({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group
      data-slot="dropdown-menu-group"
      className={cx(classes.group, className)}
      {...props}
    />
  );
}
const DropdownMenuGroup = styled(Group);
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      className={cx(classes.radioGroup, className)}
      {...props}
    />
  );
}
const DropdownMenuRadioGroup = styled(RadioGroup);
DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

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
