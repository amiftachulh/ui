import { defineSlotRecipe } from "@pandacss/dev";

export const hoverCardSlotRecipe = defineSlotRecipe({
  className: "hover-card",
  slots: ["root", "trigger", "content"],
  base: {
    content: {
      zIndex: "50",
      w: "64",
      bg: "popover",
      color: "popover.fg",
      p: "4",
      borderWidth: "1px",
      rounded: "md",
      shadow: "md",
      outline: "none",
      transformOrigin: "var(--radix-hover-card-content-transform-origin)",
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
