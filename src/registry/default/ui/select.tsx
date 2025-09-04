"use client";

import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";
import { css } from "styled-system/css";
import { select } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(select);

const Select = withRootProvider(SelectPrimitive.Root);
const SelectGroup = withContext(SelectPrimitive.Group, "group");
const SelectValue = withContext(SelectPrimitive.Value, "value");

const Trigger = ({ children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <LuChevronDown className={css({ w: "4", h: "4", opacity: "0.5" })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
const SelectTrigger = withContext(Trigger, "trigger");

function ScrollUpButton(props: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton {...props}>
      <LuChevronUp className={css({ w: "4", h: "4" })} />
    </SelectPrimitive.ScrollUpButton>
  );
}
const SelectScrollUpButton = withContext(ScrollUpButton, "scrollUpButton");

function ScrollDownButton(props: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton {...props}>
      <LuChevronDown className={css({ w: "4", h: "4" })} />
    </SelectPrimitive.ScrollDownButton>
  );
}
const SelectScrollDownButton = withContext(ScrollDownButton, "scrollDownButton");

function Content({
  position = "popper",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content position={position} data-position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={css({
            p: "1",
            "&[data-position=popper]": {
              w: "full",
              minW: "var(--radix-select-trigger-width)",
              h: "var(--radix-select-trigger-height)",
              scrollMarginY: "1",
            },
          })}
          data-position={position}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
const SelectContent = withContext(Content, "content");

const SelectLabel = withContext(SelectPrimitive.Label, "label");

function Item({ children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item {...props}>
      <span
        className={css({
          pos: "absolute",
          right: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          w: "3.5",
          h: "3.5",
        })}
      >
        <SelectPrimitive.ItemIndicator>
          <LuCheck className={css({ w: "4", h: "4" })} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
const SelectItem = withContext(Item, "item");

const SelectSeparator = withContext(SelectPrimitive.Separator, "separator");

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
