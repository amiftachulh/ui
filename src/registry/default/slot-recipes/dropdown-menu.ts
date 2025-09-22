import { defineSlotRecipe } from "@pandacss/dev";

export const dropdownMenuSlotRecipe = defineSlotRecipe({
  className: "dropdown-menu",
  slots: [
    "root",
    "trigger",
    "portal",
    "content",
    "item",
    "group",
    "label",
    "checkboxItem",
    "radioGroup",
    "radioItem",
    "separator",
    "sub",
    "subTrigger",
    "subContent",
    "shortcut",
  ],
  base: {
    content: {
      zIndex: "50",
      minW: "8rem",
      maxH: "var(--radix-dropdown-menu-content-available-height)",
      overflowX: "hidden",
      overflowY: "auto",
      p: "1",
      bg: "popover",
      color: "popover.fg",
      borderWidth: "1px",
      rounded: "md",
      shadow: "md",
      transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
      _open: {
        animateIn: true,
        fadeIn: "0",
        zoomIn: "95",
      },
      _close: {
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
      rounded: "sm",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      cursor: "default",
      userSelect: "none",
      transition: "colors",
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
          _dark: {
            bg: "danger/20",
          },
        },
        "& svg": {
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

    label: {
      px: "2",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "medium",
      "&[data-inset=true]": {
        pl: "8",
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
      rounded: "sm",
      cursor: "default",
      userSelect: "none",
      outline: "none",
      transition: "colors",
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
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      rounded: "sm",
      py: "1.5",
      pl: "8",
      pr: "2",
      textStyle: "sm",
      outline: "none",
      transition: "colors",
      _focus: {
        bg: "secondary",
        color: "secondary.fg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
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
      gap: "2",
      px: "2",
      py: "1.5",
      textStyle: "sm",
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
      "&[data-inset=true]": {
        pl: "8",
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        color: "muted.fg",
        pointerEvents: "none",
      },
    },

    subContent: {
      zIndex: "50",
      minW: "8rem",
      overflow: "hidden",
      p: "1",
      bg: "popover",
      color: "popover.fg",
      borderWidth: "1px",
      rounded: "md",
      shadow: "lg",
      transformOrigin: "var(--radix-dropdown-menu-content-transform-origin)",
      _open: {
        animateIn: true,
        fadeIn: "0",
        zoomIn: "95",
      },
      _close: {
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
