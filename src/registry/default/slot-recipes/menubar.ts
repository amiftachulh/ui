import { defineSlotRecipe } from "@pandacss/dev";

export const menubarSlotRecipe = defineSlotRecipe({
  className: "menubar",
  slots: [
    "root",
    "menu",
    "group",
    "portal",
    "radioGroup",
    "trigger",
    "content",
    "item",
    "checkboxItem",
    "radioItem",
    "itemIndicator",
    "label",
    "separator",
    "shortcut",
    "sub",
    "subTrigger",
    "subContent",
  ],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      h: "9",
      p: "1",
      bg: "bg",
      borderWidth: "1px",
      rounded: "md",
      shadow: "xs",
    },

    menu: {},

    trigger: {
      display: "flex",
      alignItems: "center",
      px: "2",
      py: "1",
      textStyle: "sm",
      fontWeight: "medium",
      rounded: "sm",
      cursor: "default",
      userSelect: "none",
      outline: "none",
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      _open: {
        bg: "accent",
        color: "accent.fg",
      },
    },

    content: {
      zIndex: 50,
      minW: "12rem",
      overflow: "hidden",
      p: "1",
      bg: "popover",
      color: "popover.fg",
      borderWidth: "1px",
      rounded: "md",
      shadow: "md",
      transformOrigin: "var(--radix-menubar-content-transform-origin)",
      _open: {
        animateIn: true,
        fadeIn: "0",
        zoomIn: "95",
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
      position: "relative",
      display: "flex",
      alignItems: "center",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      rounded: "sm",
      outline: "none",
      cursor: "default",
      userSelect: "none",
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
        _dark: {
          _focus: {
            bg: "danger/20",
          },
        },
        "* svg": {
          color: "danger!",
        },
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        color: "muted.fg",
        pointerEvents: "none",
      },
    },

    checkboxItem: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      rounded: "xs",
      outline: "none",
      cursor: "default",
      userSelect: "none",
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
        flexShrink: "0",
        pointerEvents: "none",
      },
    },

    radioItem: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      rounded: "xs",
      outline: "none",
      cursor: "default",
      userSelect: "none",
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
        flexShrink: "0",
        pointerEvents: "none",
      },
    },

    label: {
      px: "2",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "medium",
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
      color: "muted.fg",
      textStyle: "xs",
      letterSpacing: "widest",
    },

    subTrigger: {
      display: "flex",
      alignItems: "center",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      rounded: "sm",
      outline: "none",
      cursor: "default",
      userSelect: "none",
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
      bg: "popover",
      color: "popover.fg",
      p: "1",
      borderWidth: "1px",
      rounded: "md",
      shadow: "lg",
      transformOrigin: "var(--radix-menubar-content-transform-origin)",
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
