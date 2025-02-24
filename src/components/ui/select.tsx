import * as React from "react";
import { LuCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import * as SelectPrimitive from "@radix-ui/react-select";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { select } from "styled-system/recipes";

const classes = select();

const Root = SelectPrimitive.Root;

const Group = SelectPrimitive.Group;
const StyledGroup = styled(Group);
StyledGroup.displayName = SelectPrimitive.Group.displayName;

const Value = SelectPrimitive.Value;
const StyledValue = styled(Value);
StyledValue.displayName = SelectPrimitive.Value.displayName;

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
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton className={cx(classes.scrollUpButton, className)} {...props}>
    <LuChevronUp className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollUpButton>
);
const StyledScrollUpButton = styled(ScrollUpButton);
StyledScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton className={cx(classes.scrollDownButton, className)} {...props}>
    <LuChevronDown className={css({ w: "4", h: "4" })} />
  </SelectPrimitive.ScrollDownButton>
);
const StyledScrollDownButton = styled(ScrollDownButton);
StyledScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

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
      <StyledScrollUpButton />
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
const StyledContent = styled(Content);
StyledContent.displayName = SelectPrimitive.Content.displayName;

const Label = ({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label className={cx(classes.label, className)} {...props} />
);
const StyledLabel = styled(Label);
StyledLabel.displayName = SelectPrimitive.Label.displayName;

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
const StyledItem = styled(Item);
StyledItem.displayName = SelectPrimitive.Item.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const StyledSeparator = styled(Separator);
StyledSeparator.displayName = SelectPrimitive.Separator.displayName;

const Select = {
  Root,
  Group: StyledGroup,
  Value: StyledValue,
  Trigger: StyledTrigger,
  Content: StyledContent,
  Label: StyledLabel,
  Item: StyledItem,
  Separator: StyledSeparator,
  ScrollUpButton: StyledScrollUpButton,
  ScrollDownButton: StyledScrollDownButton,
};

export { Select };
