import { defineSlotRecipe } from "@pandacss/dev";

export const contextMenuSlotRecipe = defineSlotRecipe({
  className: "context-menu",
  slots: [
    "root",
    "trigger",
    "subTrigger",
    "content",
    "subContent",
    "item",
    "checkboxItem",
    "radioItem",
    "label",
    "separator",
    "shortcut",
  ],
  base: {
    content: {
      zIndex: "50",
      minW: "8rem",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bg: "popover",
      color: "popover.fg",
      p: "1",
      shadow: "md",
      animateIn: true,
      fadeIn: "80",
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

    subTrigger: {
      display: "flex",
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      rounded: "sm",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      outline: "none",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _open: {
        bg: "accent",
        color: "accent.fg",
      },
      "&[data-inset=true]": {
        pl: "8",
      },
    },

    subContent: {
      zIndex: "50",
      minW: "8rem",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bg: "popover",
      color: "popover.fg",
      p: "1",
      shadow: "md",
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

    item: {
      pos: "relative",
      display: "flex",
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      rounded: "sm",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      outline: "none",
      gap: "2",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "&[data-inset=true]": {
        pl: "8",
      },
    },

    checkboxItem: {
      pos: "relative",
      display: "flex",
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      rounded: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      outline: "none",
      gap: "2",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },

    radioItem: {
      pos: "relative",
      display: "flex",
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      rounded: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      outline: "none",
      gap: "2",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },

    label: {
      px: "2",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "semibold",
      color: "fg",
      "&[data-inset=true]": {
        pl: "8",
      },
    },

    separator: {
      mx: "-1",
      my: "1",
      h: "1px",
      bg: "border",
    },

    shortcut: {
      ml: "auto",
      textStyle: "xs",
      letterSpacing: "widest",
      color: "muted.fg",
    },
  },
});
