import { defineSlotRecipe } from "@pandacss/dev";

export const selectSlotRecipe = defineSlotRecipe({
  className: "select",
  slots: [
    "root",
    "group",
    "value",
    "trigger",
    "scrollUpButton",
    "scrollDownButton",
    "viewport",
    "content",
    "label",
    "item",
    "separator",
  ],
  base: {
    trigger: {
      textStyle: "sm",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      rounded: "md",
      borderWidth: "1px",
      w: "full",
      h: "10",
      py: "2",
      px: "3",
      bg: "bg",
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed",
      },
      _placeholder: {
        color: "muted.fg",
      },
      _focus: {
        ringOffset: "2px",
        ringWidth: "2px",
        ringColor: "ring",
      },
      "& > span": {
        lineClamp: "1",
      },
    },

    scrollUpButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: "1",
      cursor: "default",
    },

    scrollDownButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      py: "1",
      cursor: "default",
    },

    content: {
      zIndex: "50",
      pos: "relative",
      rounded: "md",
      borderWidth: "1px",
      minW: "8rem",
      maxH: "96",
      color: "fg",
      bg: "bg",
      shadow: "md",
      overflow: "hidden",
      translate: "auto",
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
      "&[data-position=popper]": {
        "&[data-side=top]": {
          y: "-1",
        },
        "&[data-side=bottom]": {
          y: "1",
        },
        "&[data-side=left]": {
          x: "-1",
        },
        "&[data-side=right]": {
          x: "1",
        },
      },
    },

    label: {
      textStyle: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      fontWeight: "semibold",
    },

    item: {
      textStyle: "sm",
      display: "flex",
      pos: "relative",
      alignItems: "center",
      outline: "none",
      rounded: "sm",
      w: "full",
      py: "1.5",
      pl: "8",
      pr: "2",
      userSelect: "none",
      cursor: "default",
      _disabled: {
        opacity: "0.5",
        pointerEvents: "none",
      },
      _focus: {
        color: "accent.fg",
        bg: "accent",
      },
    },

    separator: {
      h: "1px",
      my: "1",
      mx: "-1",
      bg: "muted",
    },
  },
});
