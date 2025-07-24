import { defineSlotRecipe } from "@pandacss/dev";

export const contextMenuSlotRecipe = defineSlotRecipe({
  className: "context-menu",
  slots: [
    "root",
    "trigger",
    "subTrigger",
    "group",
    "content",
    "subContent",
    "item",
    "checkboxItem",
    "radioGroup",
    "radioItem",
    "label",
    "separator",
    "shortcut",
  ],
  base: {
    content: {
      bg: "popover",
      color: "popover.fg",
      zIndex: "50",
      minW: "8rem",
      maxH: "var(--radix-context-menu-content-available-height)",
      overflowX: "hidden",
      overflowY: "auto",
      borderWidth: "1px",
      rounded: "md",
      p: "1",
      shadow: "md",
      transformOrigin: "var(--radix-context-menu-content-transform-origin)",
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
      "& svg": {
        w: "4",
        h: "4",
        pointerEvents: "none",
        flexShrink: "0",
      },
    },

    subContent: {
      bg: "popover",
      color: "popover.fg",
      zIndex: "50",
      minW: "8rem",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      p: "1",
      shadow: "lg",
      transformOrigin: "var(--radix-context-menu-content-transform-origin)",
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
      alignItems: "center",
      gap: "2",
      px: "2",
      py: "1.5",
      rounded: "sm",
      cursor: "default",
      userSelect: "none",
      textStyle: "sm",
      outline: "none",
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
      "&[data-variant=danger]": {
        color: "danger",
        _focus: {
          bg: "danger/10",
          color: "danger",
        },
        "* svg": {
          color: "danger!",
        },
      },
      "& svg": {
        w: "4",
        h: "4",
        pointerEvents: "none",
        flexShrink: "0",
      },
      _dark: {
        "&[data-variant=danger]": {
          _focus: {
            bg: "danger/20",
          },
        },
      },
    },

    checkboxItem: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      cursor: "default",
      gap: "2",
      userSelect: "none",
      rounded: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      outline: "none",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "& svg": {
        w: "4",
        h: "4",
        pointerEvents: "none",
        flexShrink: "0",
      },
    },

    radioItem: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2",
      cursor: "default",
      userSelect: "none",
      rounded: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      outline: "none",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "& svg": {
        w: "4",
        h: "4",
        pointerEvents: "none",
        flexShrink: "0",
      },
    },

    label: {
      px: "2",
      py: "1.5",
      color: "fg",
      textStyle: "sm",
      fontWeight: "semibold",
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
