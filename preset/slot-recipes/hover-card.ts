import { defineSlotRecipe } from "@pandacss/dev";

export const hoverCardSlotRecipe = defineSlotRecipe({
  className: "hover-card",
  slots: ["root", "trigger", "content"],
  base: {
    content: {
      zIndex: "50",
      w: "64",
      rounded: "md",
      borderWidth: "1px",
      bg: "popover",
      color: "popover.fg",
      p: "4",
      shadow: "md",
      outline: "none",
      _open: {
        animateIn: true,
        fadeIn: "0",
        zoomIn: "95",
      },
      _closed: {
        animateOut: true,
        fadeOut: "0",
        zoomOut: "95",
      },
      "&[data-side=top]": {
        slideInFromBottom: "2",
      },
      "&[data-side=bottom]": {
        slideInFromTop: "2",
      },
      "&[data-side=left]": {
        slideInFromRight: "2",
      },
      "&[data-side=right]": {
        slideInFromLeft: "2",
      },
    },
  },
});
