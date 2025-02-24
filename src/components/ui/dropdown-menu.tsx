import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dropdownMenu } from "styled-system/recipes";

const classes = dropdownMenu();

const Trigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => (
  <DropdownMenuPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const Content = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPrimitive.Content
    className={cx(classes.content, className)}
    sideOffset={sideOffset}
    {...props}
  />
);
const StyledContent = styled(Content);
StyledContent.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Item
    className={cx(classes.item, className)}
    data-inset={inset}
    {...props}
  />
);
const StyledItem = styled(Item);
StyledItem.displayName = DropdownMenuPrimitive.Item.displayName;

const Label = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Label
    className={cx(classes.label, className)}
    data-inset={inset}
    {...props}
  />
);
const StyledLabel = styled(Label);
StyledLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const CheckboxItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => (
  <DropdownMenuPrimitive.CheckboxItem className={cx(classes.checkboxItem, className)} {...props}>
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
const StyledCheckboxItem = styled(CheckboxItem);
StyledCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const RadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => (
  <DropdownMenuPrimitive.RadioItem className={cx(classes.radioItem, className)} {...props}>
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
const StyledRadioItem = styled(RadioItem);
StyledRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const StyledSeparator = styled(Separator);
StyledSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const StyledShortcut = styled(Shortcut);
StyledShortcut.displayName = "DropdownMenuShortcut";

const SubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cx(classes.subTrigger, className)}
    data-inset={inset}
    {...props}
  >
    {children}
    <LuChevronRight className={css({ ml: "auto" })} />
  </DropdownMenuPrimitive.SubTrigger>
);
const StyledSubTrigger = styled(SubTrigger);
StyledSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
  <DropdownMenuPrimitive.SubContent className={cx(classes.subContent, className)} {...props} />
);
const StyledSubContent = styled(SubContent);
StyledSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const Group = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => (
  <DropdownMenuPrimitive.Group className={cx(classes.group, className)} {...props} />
);
const StyledGroup = styled(Group);
StyledGroup.displayName = DropdownMenuPrimitive.Group.displayName;

const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => (
  <DropdownMenuPrimitive.RadioGroup className={cx(classes.radioGroup, className)} {...props} />
);
const StyledRadioGroup = styled(RadioGroup);
StyledRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

const DropdownMenu = {
  Root: DropdownMenuPrimitive.Root,
  Trigger: StyledTrigger,
  Content: StyledContent,
  Item: StyledItem,
  Label: StyledLabel,
  CheckboxItem: StyledCheckboxItem,
  RadioItem: StyledRadioItem,
  RadioGroup: StyledRadioGroup,
  Separator: StyledSeparator,
  Shortcut: StyledShortcut,
  Group: StyledGroup,
  SubTrigger: StyledSubTrigger,
  SubContent: StyledSubContent,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuPrimitive.Sub,
};

export { DropdownMenu };
