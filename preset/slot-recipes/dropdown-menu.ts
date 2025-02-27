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
      minW: "32",
      overflow: "hidden",
      p: "1",
      bg: "bg",
      color: "fg",
      borderWidth: "1",
      rounded: "md",
      shadow: "md",
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

    subTrigger: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      outline: "none",
      rounded: "sm",
      cursor: "default",
      userSelect: "none",
      _focus: {
        bg: "secondary",
      },
      _open: {
        bg: "secondary",
      },
      "&[data-inset=true]": {
        pl: "8",
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        pointerEvents: "none",
      },
    },

    subContent: {
      zIndex: "50",
      minW: "32",
      overflow: "hidden",
      p: "1",
      bg: "bg",
      color: "fg",
      borderWidth: "1",
      rounded: "md",
      shadow: "lg",
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
      cursor: "default",
      userSelect: "none",
      alignItems: "center",
      gap: "2",
      rounded: "sm",
      px: "2",
      py: "1.5",
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
      "&[data-inset=true]": {
        pl: "8",
      },
      "& svg": {
        pointerEvents: "none",
        w: "4",
        h: "4",
        flexShrink: "0",
      },
    },

    label: {
      px: "2",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "semibold",
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
      bg: "muted",
    },

    shortcut: {
      ml: "auto",
      textStyle: "xs",
      letterSpacing: "widest",
      opacity: "0.6",
    },
  },
});
