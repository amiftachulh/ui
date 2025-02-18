import * as React from "react";
import { LuCheck, LuChevronRight, LuCircle } from "react-icons/lu";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { css, cx } from "styled-system/css";
import { dropdownMenu } from "styled-system/recipes";

const classes = dropdownMenu();

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) => (
  <DropdownMenuPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuContent = ({
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
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = ({
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
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuLabel = ({
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
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuCheckboxItem = ({
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
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = ({
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
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) => (
  <DropdownMenuPrimitive.Separator className={cx(classes.separator, className)} {...props} />
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.shortcut, className)} {...props} />
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const DropdownMenuSubTrigger = ({
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
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) => (
  <DropdownMenuPrimitive.SubContent className={cx(classes.subContent, className)} {...props} />
);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) => (
  <DropdownMenuPrimitive.Group className={cx(classes.group, className)} {...props} />
);
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

const DropdownMenuRadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) => (
  <DropdownMenuPrimitive.RadioGroup className={cx(classes.radioGroup, className)} {...props} />
);
DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
};
