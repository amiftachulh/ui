"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { navigationMenu } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(navigationMenu);

function Viewport(props: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={css({
        pos: "absolute",
        top: "100%",
        left: "0",
        display: "flex",
        justifyContent: "center",
      })}
    >
      <NavigationMenuPrimitive.Viewport {...props} />
    </div>
  );
}
const NavigationMenuViewport = withContext(Viewport, "viewport");

function Root({
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & { viewport?: boolean }) {
  return (
    <NavigationMenuPrimitive.Root data-viewport={viewport} {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}
const NavigationMenu = withProvider(Root, "root");

const NavigationMenuList = withContext(NavigationMenuPrimitive.List, "list");
const NavigationMenuItem = withContext(NavigationMenuPrimitive.Item, "item");

function Trigger({
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger {...props}>
      {children}
      <LuChevronDown />
    </NavigationMenuPrimitive.Trigger>
  );
}
const NavigationMenuTrigger = withContext(Trigger, "trigger");

const NavigationMenuContent = withContext(NavigationMenuPrimitive.Content, "content");
const NavigationMenuLink = withContext(NavigationMenuPrimitive.Link, "link");

function Indicator({ ...props }: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator {...props}>
      <div
        className={css({
          position: "relative",
          top: "70%",
          h: "2",
          w: "2",
          transform: "rotate(45deg)",
          roundedTopLeft: "sm",
          bg: "popover",
          shadow: "md",
          borderWidth: "1px",
        })}
      />
    </NavigationMenuPrimitive.Indicator>
  );
}
const NavigationMenuIndicator = withContext(Indicator, "indicator");

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
};
