import { defineSlotRecipe } from "@pandacss/dev";

export const scrollAreaSlotRecipe = defineSlotRecipe({
  className: "scroll-area",
  slots: ["root", "viewport", "scrollAreaScrollbar", "scrollAreaThumb"],
  base: {
    root: {
      pos: "relative",
    },

    viewport: {
      w: "full",
      h: "full",
      rounded: "inherit",
      transition: "common",
      outlineColor: "transparent",
      _focusVisible: {
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
    },

    scrollAreaScrollbar: {
      display: "flex",
      p: "1px",
      touchAction: "none",
      userSelect: "none",
      transition: "colors",
      _horizontal: {
        h: "2.5",
        flexDir: "column",
        borderTopWidth: "1px",
        borderTopColor: "transparent",
      },
      _vertical: {
        w: "2.5",
        h: "full",
        borderLeftWidth: "1px",
        borderLeftColor: "transparent",
      },
    },

    scrollAreaThumb: {
      pos: "relative",
      flex: "1",
      bg: "border",
      rounded: "full",
    },
  },
});
