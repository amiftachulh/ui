"use client";

import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css, cx } from "styled-system/css";
import { dropdownMenu } from "styled-system/recipes";

const styles = dropdownMenu();

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPrimitive.Content
    sideOffset={sideOffset}
    className={cx(styles.content, className)}
    {...props}
  />
);

const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Item
    className={cx(styles.item, inset && css({ pl: "8" }), className)}
    {...props}
  />
);

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Label
    className={cx(styles.label, inset && css({ pl: "8" }), className)}
    {...props}
  />
);

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => (
  <DropdownMenuPrimitive.CheckboxItem className={cx(styles.checkboxItem, className)} {...props}>
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

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => (
  <DropdownMenuPrimitive.RadioItem className={cx(styles.radioItem, className)} {...props}>
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

const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator className={cx(styles.separator, className)} {...props} />
);

const DropdownMenuShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(styles.shortcut, className)} {...props} />
);

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cx(styles.subTrigger, inset && css({ pl: "8" }), className)}
    {...props}
  >
    {children}
    <LuChevronRight className={css({ ml: "auto" })} />
  </DropdownMenuPrimitive.SubTrigger>
);

const DropdownMenuSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
  <DropdownMenuPrimitive.SubContent className={cx(styles.subContent, className)} {...props} />
);

const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
