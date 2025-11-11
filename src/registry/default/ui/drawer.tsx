"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { drawer } from "styled-system/recipes";
import { Drawer as DrawerPrimitive } from "vaul";

const { withRootProvider, withContext } = createStyleContext(drawer);

const Drawer = withRootProvider(DrawerPrimitive.Root);

const DrawerTrigger = withContext(DrawerPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "drawer-trigger",
  },
});

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = withContext(DrawerPrimitive.Close, "close", {
  defaultProps: {
    "data-slot": "drawer-close",
  },
});

const DrawerOverlay = withContext(DrawerPrimitive.Overlay, "overlay", {
  defaultProps: {
    "data-slot": "drawer-overlay",
  },
});

function Content({ children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content data-slot="drawer-content" {...props}>
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

const DrawerHeader = withContext("div", "header", {
  defaultProps: {
    "data-slot": "drawer-header",
  },
});

const DrawerTitle = withContext(DrawerPrimitive.Title, "title", {
  defaultProps: {
    "data-slot": "drawer-title",
  },
});

const DrawerDescription = withContext(DrawerPrimitive.Description, "description", {
  defaultProps: {
    "data-slot": "drawer-description",
  },
});

const DrawerFooter = withContext("div", "footer", {
  defaultProps: {
    "data-slot": "drawer-footer",
  },
});

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
