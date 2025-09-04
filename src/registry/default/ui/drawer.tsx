"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { drawer } from "styled-system/recipes";
import { Drawer as DrawerPrimitive } from "vaul";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withRootProvider, withContext } = createStyleContext(drawer);

const Drawer = withRootProvider(DrawerPrimitive.Root);
const DrawerTrigger = withContext(DrawerPrimitive.Trigger, "trigger");
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = withContext(DrawerPrimitive.Close, "close");
const DrawerOverlay = withContext(DrawerPrimitive.Overlay, "overlay");

function Content({ children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content {...props}>
        <div
          className={css({
            bg: "muted",
            mx: "auto",
            mt: "4",
            display: "none",
            w: "100px",
            h: "2",
            flexShrink: "0",
            rounded: "full",
            "[data-vaul-drawer-direction=bottom] &": {
              display: "block",
            },
          })}
        />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}
const DrawerContent = withContext(Content, "content");

const DrawerHeader = withContext("div", "header");
const DrawerTitle = withContext(DrawerPrimitive.Title, "title");
const DrawerDescription = withContext(DrawerPrimitive.Description, "description");
const DrawerFooter = withContext("div", "footer");

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
