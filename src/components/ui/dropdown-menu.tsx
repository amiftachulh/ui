import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { dropdownMenu } from "styled-system/recipes";

const classes = dropdownMenu();

const DropdownMenu = DropdownMenuPrimitive.Root;

const Trigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => (
  <DropdownMenuPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const DropdownMenuTrigger = styled(Trigger);
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

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
const DropdownMenuContent = styled(Content);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

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
const DropdownMenuItem = styled(Item);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

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
const DropdownMenuLabel = styled(Label);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

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
const DropdownMenuCheckboxItem = styled(CheckboxItem);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

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
const DropdownMenuRadioItem = styled(RadioItem);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const DropdownMenuSeparator = styled(Separator);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const DropdownMenuShortcut = styled(Shortcut);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

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
const DropdownMenuSubTrigger = styled(SubTrigger);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
  <DropdownMenuPrimitive.SubContent className={cx(classes.subContent, className)} {...props} />
);
const DropdownMenuSubContent = styled(SubContent);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const Group = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => (
  <DropdownMenuPrimitive.Group className={cx(classes.group, className)} {...props} />
);
const DropdownMenuGroup = styled(Group);
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => (
  <DropdownMenuPrimitive.RadioGroup className={cx(classes.radioGroup, className)} {...props} />
);
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
