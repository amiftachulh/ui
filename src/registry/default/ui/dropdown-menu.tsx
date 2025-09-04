"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css } from "styled-system/css";
import { dropdownMenu } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(dropdownMenu);

const DropdownMenu = withRootProvider(DropdownMenuPrimitive.Root);
const DropdownMenuTrigger = withContext(DropdownMenuPrimitive.Trigger, "trigger");
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

function Content({
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return <DropdownMenuPrimitive.Content sideOffset={sideOffset} {...props} />;
}
const DropdownMenuContent = withContext(Content, "content");

function Item({
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Item data-inset={inset} {...props} />;
}
const DropdownMenuItem = withContext(Item, "item");

function Label({
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Label data-inset={inset} {...props} />;
}
const DropdownMenuLabel = withContext(Label, "label");

function CheckboxItem({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem {...props}>
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

function RadioItem({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem {...props}>
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

const DropdownMenuSeparator = withContext(DropdownMenuPrimitive.Separator, "separator");
const DropdownMenuShortcut = withContext("span", "shortcut");

function SubTrigger({
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) {
  return (
    <DropdownMenuPrimitive.SubTrigger data-inset={inset} {...props}>
      {children}
      <LuChevronRight className={css({ ml: "auto" })} />
    </DropdownMenuPrimitive.SubTrigger>
  );
}
const DropdownMenuSubTrigger = withContext(SubTrigger, "subTrigger");

function SubContent(props: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return <DropdownMenuPrimitive.SubContent {...props} />;
}
const DropdownMenuSubContent = withContext(SubContent, "subContent");
const DropdownMenuGroup = withContext(DropdownMenuPrimitive.Group, "group");
const DropdownMenuRadioGroup = withContext(DropdownMenuPrimitive.RadioGroup, "radioGroup");
const DropdownMenuSub = withContext(DropdownMenuPrimitive.Sub, "sub");

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
