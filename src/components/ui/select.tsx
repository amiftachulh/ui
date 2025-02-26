import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { select } from "styled-system/recipes";

const classes = select();

const Select = SelectPrimitive.Root;

const Group = SelectPrimitive.Group;
const SelectGroup = styled(Group);
SelectGroup.displayName = SelectPrimitive.Group.displayName;

const Value = SelectPrimitive.Value;
const SelectValue = styled(Value);
SelectValue.displayName = SelectPrimitive.Value.displayName;

const Trigger = ({
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
const SelectTrigger = styled(Trigger);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton className={cx(classes.scrollUpButton, className)} {...props}>
    <LuChevronUp className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollUpButton>
);
const SelectScrollUpButton = styled(ScrollUpButton);
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton className={cx(classes.scrollDownButton, className)} {...props}>
    <LuChevronDown className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollDownButton>
);
const SelectScrollDownButton = styled(ScrollDownButton);
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const Content = ({
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
const SelectContent = styled(Content);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const Label = ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label className={cx(classes.label, className)} {...props} />
);
const SelectLabel = styled(Label);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const Item = ({
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
const SelectItem = styled(Item);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
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
