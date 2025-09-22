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
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
      w: "fit",
      px: "3",
      py: "2",
      bg: "transparent",
      borderWidth: "1px",
      borderColor: "input",
      rounded: "md",
      shadow: "xs",
      outlineColor: "transparent",
      textStyle: "sm",
      whiteSpace: "nowrap",
      transition: "all",
      _focusVisible: {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "&[data-placeholder]": {
        color: "muted.fg",
      },
      "&[data-size=default]": {
        h: "9",
      },
      "&[data-size=sm]": {
        h: "8",
      },
      "&[aria-invalid=true]": {
        borderColor: "danger",
        outlineColor: "danger/20",
        _dark: {
          outlineColor: "danger/40",
        },
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        color: "muted.fg",
        pointerEvents: "none",
      },
      _dark: {
        bg: "input/30",
        _hover: {
          bg: "input/50",
        },
      },
      "& > [data-slot=select-value]": {
        display: "flex",
        alignItems: "center",
        gap: "2",
        lineClamp: "1",
      },
    },

    value: {},

    content: {
      pos: "relative",
      zIndex: "50",
      overflowX: "hidden",
      overflowY: "auto",
      minW: "8rem",
      maxH: "var(--radix-select-content-available-height)",
      bg: "popover",
      color: "popover.fg",
      borderWidth: "1px",
      rounded: "md",
      shadow: "md",
      transformOrigin: "var(--radix-select-content-transform-origin)",
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
          transform: "translateY(-0.25rem)",
        },
        "&[data-side=bottom]": {
          transform: "translateY(0.25rem)",
        },
        "&[data-side=left]": {
          transform: "translateX(-0.25rem)",
        },
        "&[data-side=right]": {
          transform: "translateX(0.25rem)",
        },
      },
    },

    label: {
      px: "2",
      py: "1.5",
      color: "muted.fg",
      textStyle: "xs",
    },

    item: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2",
      w: "full",
      py: "1.5",
      pl: "2",
      pr: "8",
      textStyle: "sm",
      outline: "none",
      rounded: "sm",
      userSelect: "none",
      cursor: "default",
      _disabled: {
        opacity: "0.5",
        pointerEvents: "none",
      },
      _focus: {
        bg: "accent",
        color: "accent.fg",
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
        color: "muted.fg",
        pointerEvents: "none",
      },
      "& span:last-child": {
        display: "flex",
        alignItems: "center",
        gap: "2",
      },
    },

    separator: {
      h: "1px",
      mx: "-1",
      my: "1",
      bg: "border",
      pointerEvents: "none",
    },

    scrollUpButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      py: "1",
      cursor: "default",
    },

    scrollDownButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      py: "1",
      cursor: "default",
    },
  },
});
