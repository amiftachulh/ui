import { defineSlotRecipe } from "@pandacss/dev";

export const tooltipSlotRecipe = defineSlotRecipe({
  className: "tooltip",
  slots: ["trigger", "content"],
  base: {
    content: {
      zIndex: "50",
      overflow: "hidden",
      w: "fit",
      px: "3",
      py: "1.5",
      bg: "primary",
      color: "primary.fg",
      textStyle: "xs",
      textWrap: "balance",
      rounded: "md",
      shadow: "md",
      borderWidth: "1px",
      transformOrigin: "var(--radix-tooltip-content-transform-origin)",
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
