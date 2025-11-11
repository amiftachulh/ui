"use client";

import * as React from "react";
import { LuX } from "react-icons/lu";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { sheet } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(sheet);

const Sheet = withRootProvider(SheetPrimitive.Root);
const SheetPortal = SheetPrimitive.Portal;

const SheetTrigger = withContext(SheetPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "sheet-trigger",
  },
});

const SheetOverlay = withContext(SheetPrimitive.Overlay, "overlay", {
  defaultProps: {
    "data-slot": "sheet-overlay",
  },
});

const SheetClose = withContext(SheetPrimitive.Close, "close", {
  defaultProps: {
    "data-slot": "sheet-close",
  },
});

function Content({ children, ...props }: React.ComponentProps<typeof SheetPrimitive.Content>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content data-slot="sheet-content" {...props}>
        {children}
        <SheetClose
          css={{
            pos: "absolute",
            top: "4",
            right: "4",
            rounded: "xs",
            opacity: "0.7",
            _hover: { opacity: "1" },
            _focus: {
              outlineWidth: "2px",
              outlineStyle: "solid",
              outlineColor: "ring/50",
            },
            _disabled: { pointerEvents: "none" },
          }}
        >
          <LuX className={css({ w: "4", h: "4" })} />
          <span className={css({ srOnly: true })}>Close</span>
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}
const SheetContent = withContext(Content, "content");

const SheetHeader = withContext("div", "header", {
  defaultProps: {
    "data-slot": "sheet-header",
  },
});

const SheetTitle = withContext(SheetPrimitive.Title, "title", {
  defaultProps: {
    "data-slot": "sheet-title",
  },
});

const SheetDescription = withContext(SheetPrimitive.Description, "description", {
  defaultProps: {
    "data-slot": "sheet-description",
  },
});

const SheetFooter = withContext("div", "footer", {
  defaultProps: {
    "data-slot": "sheet-footer",
  },
});

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetOverlay,
  SheetClose,
};
