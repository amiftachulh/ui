"use client";

import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { select } from "styled-system/recipes";

const classes = select();

const Select = SelectPrimitive.Root;

function Group({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cx(classes.group, className)}
      {...props}
    />
  );
}
const SelectGroup = styled(Group);
SelectGroup.displayName = SelectPrimitive.Group.displayName;

function Value({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cx(classes.value, className)}
      {...props}
    />
  );
}
const SelectValue = styled(Value);
SelectValue.displayName = SelectPrimitive.Value.displayName;

const Trigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger
    data-slot="select-trigger"
    className={cx(classes.trigger, className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <LuChevronDown className={css({ w: "4", h: "4", opacity: "0.5" })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
const SelectTrigger = styled(Trigger);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

function ScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cx(classes.scrollUpButton, className)}
      {...props}
    >
      <LuChevronUp className={css({ w: "4", h: "4" })} />
    </SelectPrimitive.ScrollUpButton>
  );
}
const SelectScrollUpButton = styled(ScrollUpButton);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

function ScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cx(classes.scrollDownButton, className)}
      {...props}
    >
      <LuChevronDown className={css({ w: "4", h: "4" })} />
    </SelectPrimitive.ScrollDownButton>
  );
}
const SelectScrollDownButton = styled(ScrollDownButton);
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

function Content({
  className,
  contentPosition = "popper",
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Content>, "position"> & {
  contentPosition?: SelectPrimitive.SelectContentProps["position"];
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cx(classes.content, className)}
        position={contentPosition}
        data-position={contentPosition}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-slot="select-viewport"
          className={css({
            p: "1",
            "&[data-position=popper]": {
              h: "var(--radix-select-trigger-height)",
              w: "full",
              minW: "var(--radix-select-trigger-width)",
              scrollMarginY: "1",
            },
          })}
          data-position={contentPosition}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
const SelectContent = styled(Content);
SelectContent.displayName = SelectPrimitive.Content.displayName;

function Label({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cx(classes.label, className)}
      {...props}
    />
  );
}
const SelectLabel = styled(Label);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

function Item({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cx(classes.item, className)}
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
        <SelectPrimitive.ItemIndicator data-slot="select-item-indicator">
          <LuCheck className={css({ w: "4", h: "4" })} />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText data-slot="select-item-text">{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
const SelectItem = styled(Item);
SelectItem.displayName = SelectPrimitive.Item.displayName;

function Separator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cx(classes.separator, className)}
      {...props}
    />
  );
}
const SelectSeparator = styled(Separator);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

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
