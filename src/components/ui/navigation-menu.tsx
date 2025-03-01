"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { navigationMenu } from "styled-system/recipes";

const classes = navigationMenu();

function Viewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div data-slot="navigation-menu-viewport-wrapper" className={classes.viewportWrapper}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cx(classes.viewport, className)}
        {...props}
      />
    </div>
  );
}
const NavigationMenuViewport = styled(Viewport);
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

function Root({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cx(classes.root, className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
}
const NavigationMenu = styled(Root);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

function List({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cx(classes.list, className)}
      {...props}
    />
  );
}
const NavigationMenuList = styled(List);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

function Item({ className, ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cx(classes.item, className)}
      {...props}
    />
  );
}
const NavigationMenuItem = styled(Item);
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

function Trigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cx(classes.trigger, className)}
      {...props}
    >
      {children}
      <LuChevronDown />
    </NavigationMenuPrimitive.Trigger>
  );
}
const NavigationMenuTrigger = styled(Trigger);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

function Content({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cx(classes.content, className)}
      {...props}
    />
  );
}
const NavigationMenuContent = styled(Content);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = styled(NavigationMenuPrimitive.Link);
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

function Indicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cx(classes.indicator, className)}
      {...props}
    >
      <div />
    </NavigationMenuPrimitive.Indicator>
  );
}
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
