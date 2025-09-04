"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { css } from "styled-system/css";
import { contextMenu } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(contextMenu);

const ContextMenu = withRootProvider(ContextMenuPrimitive.Root);
const ContextMenuTrigger = withContext(ContextMenuPrimitive.Trigger, "trigger");
const ContextMenuGroup = withContext(ContextMenuPrimitive.Group, "group");
const ContextMenuPortal = ContextMenuPrimitive.Portal;
const ContextMenuSub = ContextMenuPrimitive.Sub;
const ContextMenuRadioGroup = withContext(ContextMenuPrimitive.RadioGroup, "radioGroup");

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <ContextMenuPrimitive.SubTrigger data-inset={inset} {...props}>
      {children}
      <LuChevronRight className={css({ ml: "auto" })} />
    </ContextMenuPrimitive.SubTrigger>
  );
}
const ContextMenuSubTrigger = withContext(SubTrigger, "subTrigger");

const ContextMenuSubContent = withContext(ContextMenuPrimitive.SubContent, "subContent");

function Content(props: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content {...props} />
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
  return <ContextMenuPrimitive.Item data-inset={inset} data-variant={variant} {...props} />;
}
const ContextMenuItem = withContext(Item, "item");

function CheckboxItem({
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem {...props}>
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
    <ContextMenuPrimitive.RadioItem {...props}>
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
  return <ContextMenuPrimitive.Label data-inset={inset} {...props} />;
}
const ContextMenuLabel = withContext(Label, "label");

const ContextMenuSeparator = withContext(ContextMenuPrimitive.Separator, "separator");
const ContextMenuShortcut = withContext("span", "shortcut");

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
