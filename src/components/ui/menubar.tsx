import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { menubar } from "styled-system/recipes";

const classes = menubar();

const MenubarMenu = styled(MenubarPrimitive.Menu);
MenubarMenu.displayName = MenubarPrimitive.Menu.displayName;

const MenubarGroup = styled(MenubarPrimitive.Group);
MenubarGroup.displayName = MenubarPrimitive.Group.displayName;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarRadioGroup = styled(MenubarPrimitive.RadioGroup);
MenubarRadioGroup.displayName = MenubarPrimitive.RadioGroup.displayName;

const MenubarSub = styled(MenubarPrimitive.Sub);
MenubarSub.displayName = MenubarPrimitive.Sub.displayName;

const Root = ({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive.Root>) => (
  <MenubarPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const Menubar = styled(Root);
Menubar.displayName = MenubarPrimitive.Root.displayName;

const Trigger = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) => (
  <MenubarPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const MenubarTrigger = styled(Trigger);
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const SubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & { inset?: boolean }) => (
  <MenubarPrimitive.SubTrigger
    className={cx(classes.subTrigger, className)}
    data-inset={inset}
    {...props}
  >
    {children}
    <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
  </MenubarPrimitive.SubTrigger>
);
const MenubarSubTrigger = styled(SubTrigger);
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const SubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) => (
  <MenubarPrimitive.SubContent className={cx(classes.subContent, className)} {...props} />
);
const MenubarSubContent = styled(SubContent);
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const Content = ({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      className={cx(classes.content, className)}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      {...props}
    />
  </MenubarPrimitive.Portal>
);
const MenubarContent = styled(Content);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const Item = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & { inset?: boolean }) => (
  <MenubarPrimitive.Item className={cx(classes.item, className)} data-inset={inset} {...props} />
);
const MenubarItem = styled(Item);
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const CheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) => (
  <MenubarPrimitive.CheckboxItem
    className={cx(classes.checkboxItem, className)}
    checked={checked}
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
      <MenubarPrimitive.ItemIndicator>
        <LuCheck className={css({ w: "4", h: "4" })} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
);
const MenubarCheckboxItem = styled(CheckboxItem);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const RadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) => (
  <MenubarPrimitive.RadioItem className={cx(classes.radioItem, className)} {...props}>
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
      <MenubarPrimitive.ItemIndicator>
        <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
);
const MenubarRadioItem = styled(RadioItem);
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const Label = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & { inset?: boolean }) => (
  <MenubarPrimitive.Label className={cx(classes.label, className)} data-inset={inset} {...props} />
);
const MenubarLabel = styled(Label);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) => (
  <MenubarPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const MenubarSeparator = styled(Separator);
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const MenubarShortcut = styled(Shortcut);
MenubarShortcut.displayName = "Shortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
