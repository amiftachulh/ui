"use client";

import { LuX } from "react-icons/lu";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { visuallyHidden } from "styled-system/patterns";
import { drawer, type DrawerVariant } from "styled-system/recipes";
import { createStyleContext } from "@/lib/style-context";

const { withProvider, withContext } = createStyleContext(drawer);

const Drawer = withProvider(DrawerPrimitive.Root, "root");
const DrawerTrigger = withContext(DrawerPrimitive.Trigger, "trigger");
const DrawerPortal = withContext(DrawerPrimitive.Portal, "portal");
const DrawerOverlay = withContext(DrawerPrimitive.Overlay, "overlay");
const DrawerClose = withContext(DrawerPrimitive.Close, "close");

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content className={className} {...props}>
      {children}
      <DrawerClose pos="absolute" top="4" right="4" cursor="pointer">
        <LuX className={css({ w: "4", h: "4" })} />
        <span className={visuallyHidden()}>Close</span>
      </DrawerClose>
    </DrawerPrimitive.Content>
  </DrawerPortal>
);

const DrawerContent = withContext(Content, "content");
const DrawerHeader = withContext("div", "header");
const DrawerTitle = withContext(DrawerPrimitive.Title, "title");
const DrawerDescription = withContext(DrawerPrimitive.Description, "description");
const DrawerFooter = withContext("div", "footer");

export {
  Drawer,
  DrawerTrigger,
  DrawerPortal,
  DrawerOverlay,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerContent,
  DrawerFooter,
  DrawerClose,
};
