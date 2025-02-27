import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { navigationMenu } from "styled-system/recipes";

const classes = navigationMenu();

const Viewport = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) => (
  <div className={classes.viewportWrapper}>
    <NavigationMenuPrimitive.Viewport className={cx(classes.viewport, className)} {...props} />
  </div>
);
const NavigationMenuViewport = styled(Viewport);
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const Root = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) => (
  <NavigationMenuPrimitive.Root className={cx(classes.root, className)} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
);
const NavigationMenu = styled(Root);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const List = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) => (
  <NavigationMenuPrimitive.List className={cx(classes.list, className)} {...props} />
);
const NavigationMenuList = styled(List);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const Item = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) => (
  <NavigationMenuPrimitive.Item className={cx(classes.item, className)} {...props} />
);
const NavigationMenuItem = styled(Item);
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const Trigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) => (
  <NavigationMenuPrimitive.Trigger className={cx(classes.trigger, className)} {...props}>
    {children}
    <LuChevronDown />
  </NavigationMenuPrimitive.Trigger>
);
const NavigationMenuTrigger = styled(Trigger);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const Content = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) => (
  <NavigationMenuPrimitive.Content className={cx(classes.content, className)} {...props} />
);
const NavigationMenuContent = styled(Content);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link);
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const Indicator = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) => (
  <NavigationMenuPrimitive.Indicator className={cx(classes.indicator, className)} {...props}>
    <div />
  </NavigationMenuPrimitive.Indicator>
);
const NavigationMenuIndicator = styled(Indicator);
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
