import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";
import { css, cx } from "styled-system/css";
import { select } from "styled-system/recipes";

const classes = select();

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger className={cx(classes.trigger, className)} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <LuChevronDown className={css({ w: "4", h: "4", opacity: "0.5" })} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton className={cx(classes.scrollUpButton, className)} {...props}>
    <LuChevronUp className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollUpButton>
);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton className={cx(classes.scrollDownButton, className)} {...props}>
    <LuChevronDown className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollDownButton>
);
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = ({
  className,
  position = "popper",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cx(classes.content, className)}
      position={position}
      data-position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={css({
          p: "1",
          "&[data-position=popper]": {
            h: "var(--radix-select-trigger-height)",
            w: "full",
            minW: "var(--radix-select-trigger-width)",
          },
        })}
        data-position={position}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label className={cx(classes.label, className)} {...props} />
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item className={cx(classes.item, className)} {...props}>
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
      <SelectPrimitive.ItemIndicator>
        <LuCheck className={css({ w: "4", h: "4" })} />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
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
  SelectScrollUpButton,
  SelectScrollDownButton,
};
