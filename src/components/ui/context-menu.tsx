"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { contextMenu } from "styled-system/recipes";

const classes = contextMenu();

const ContextMenu = ContextMenuPrimitive.Root;

function Trigger({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={className}
      {...props}
    />
  );
}
const ContextMenuTrigger = styled(Trigger);
ContextMenuTrigger.displayName = ContextMenuPrimitive.Trigger.displayName;

function Group({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" className={className} {...props} />
  );
}
const ContextMenuGroup = styled(Group);
ContextMenuGroup.displayName = ContextMenuPrimitive.Group.displayName;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      className={cx(className)}
      {...props}
    />
  );
}
const ContextMenuRadioGroup = styled(RadioGroup);
ContextMenuRadioGroup.displayName = ContextMenuPrimitive.RadioGroup.displayName;

function SubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      className={cx(classes.subTrigger, className)}
      data-inset={inset}
      {...props}
    >
      {children}
      <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
    </ContextMenuPrimitive.SubTrigger>
  );
}
const ContextMenuSubTrigger = styled(SubTrigger);
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

function SubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cx(classes.subContent, className)}
      {...props}
    />
  );
}
const ContextMenuSubContent = styled(SubContent);
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

function Content({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cx(classes.content, className)}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}
const ContextMenuContent = styled(Content);
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

function Item({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      className={cx(classes.item, className)}
      data-inset={inset}
      {...props}
    />
  );
}
const ContextMenuItem = styled(Item);
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

function CheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
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
        <ContextMenuPrimitive.ItemIndicator>
          <LuCheck className={css({ w: "4", h: "4" })} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}
const ContextMenuCheckboxItem = styled(CheckboxItem);
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

function RadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
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
        <ContextMenuPrimitive.ItemIndicator>
          <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}
const ContextMenuRadioItem = styled(RadioItem);
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

function Label({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      className={cx(classes.label, className)}
      data-inset={inset}
      {...props}
    />
  );
}
const ContextMenuLabel = styled(Label);
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cx(classes.separator, className)}
      {...props}
    />
  );
}
const ContextMenuSeparator = styled(Separator);
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

function Shortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cx(classes.shortcut, className)}
      {...props}
    />
  );
}
const ContextMenuShortcut = styled(Shortcut);
ContextMenuShortcut.displayName = "Shortcut";

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
