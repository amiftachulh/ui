import { defineSlotRecipe } from "@pandacss/dev";

export const scrollAreaSlotRecipe = defineSlotRecipe({
  className: "scroll-area",
  slots: ["root", "viewport", "scrollAreaScrollbar", "scrollAreaThumb"],
  base: {
    root: {
      pos: "relative",
      overflow: "hidden",
    },

    viewport: {
      w: "full",
      h: "full",
      rounded: "inherit",
    },

    scrollAreaScrollbar: {
      display: "flex",
      touchAction: "none",
      userSelect: "none",
      transition: "colors",
      _horizontal: {
        h: "2.5",
        flexDir: "column",
        borderTopWidth: "1px",
        borderTopColor: "transparent",
        p: "1px",
      },
      _vertical: {
        w: "2.5",
        h: "full",
        borderLeftWidth: "1px",
        borderLeftColor: "transparent",
        p: "1px",
      },
    },

    scrollAreaThumb: {
      pos: "relative",
      flex: "1",
      rounded: "full",
      bg: "border",
    },
  },
});
