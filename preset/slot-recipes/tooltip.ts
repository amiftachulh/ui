import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipSlotRecipe = defineSlotRecipe({
  className: "tooltip",
  slots: ["content"],
  base: {
    content: {
      zIndex: "50",
      w: "fit",
      overflow: "hidden",
      rounded: "md",
      bg: "popover",
      color: "popover.fg",
      px: "3",
      py: "1.5",
      textStyle: "xs",
      textWrap: "balance",
      shadow: "md",
      borderWidth: "1px",
      animateIn: true,
      fadeIn: "0",
      zoomIn: "95",
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
