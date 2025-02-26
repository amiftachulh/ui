import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { contextMenu } from "styled-system/recipes";

const classes = contextMenu();

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = styled(ContextMenuPrimitive.Trigger);

const ContextMenuGroup = styled(ContextMenuPrimitive.Group);

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = styled(ContextMenuPrimitive.Sub);

const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup);

const SubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & { inset?: boolean }) => (
  <ContextMenuPrimitive.SubTrigger
    className={cx(classes.subTrigger, className)}
    data-inset={inset}
    {...props}
  >
    {children}
    <LuChevronRight className={css({ ml: "auto", w: "4", h: "4" })} />
  </ContextMenuPrimitive.SubTrigger>
);
const ContextMenuSubTrigger = styled(SubTrigger);
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const SubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) => (
  <ContextMenuPrimitive.SubContent className={cx(classes.subContent, className)} {...props} />
);
const ContextMenuSubContent = styled(SubContent);
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const Content = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content className={cx(classes.content, className)} {...props} />
  </ContextMenuPrimitive.Portal>
);
const ContextMenuContent = styled(Content);
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const Item = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & { inset?: boolean }) => (
  <ContextMenuPrimitive.Item
    className={cx(classes.item, className)}
    data-inset={inset}
    {...props}
  />
);
const ContextMenuItem = styled(Item);
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const CheckboxItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) => (
  <ContextMenuPrimitive.CheckboxItem className={cx(classes.checkboxItem, className)} {...props}>
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
      <ContextMenuPrimitive.ItemIndicator>
        <LuCheck className={css({ w: "4", h: "4" })} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);
const ContextMenuCheckboxItem = styled(CheckboxItem);
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const RadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) => (
  <ContextMenuPrimitive.RadioItem className={cx(classes.radioItem, className)} {...props}>
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
      <ContextMenuPrimitive.ItemIndicator>
        <LuCircle className={css({ w: "2", h: "2", fill: "current" })} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
);
const ContextMenuRadioItem = styled(RadioItem);
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const Label = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & { inset?: boolean }) => (
  <ContextMenuPrimitive.Label
    className={cx(classes.label, className)}
    data-inset={inset}
    {...props}
  />
);
const ContextMenuLabel = styled(Label);
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const Separator = ({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) => (
  <ContextMenuPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
const ContextMenuSeparator = styled(Separator);
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const Shortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
const ContextMenuShortcut = styled(Shortcut);
ContextMenuShortcut.displayName = "Shortcut";

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
