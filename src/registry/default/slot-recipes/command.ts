import { defineSlotRecipe } from "@pandacss/dev";

export const commandSlotRecipe = defineSlotRecipe({
  className: "command",
  slots: ["root", "dialog", "input", "list", "empty", "group", "separator", "item", "shortcut"],
  base: {
    root: {
      display: "flex",
      w: "full",
      h: "full",
      flexDir: "column",
      overflow: "hidden",
      rounded: "md",
      bg: "popover",
      color: "popover.fg",
    },

    dialog: {
      "& [cmdk-group-heading]": {
        px: "2",
        fontWeight: "medium",
        color: "muted.fg",
      },
      "& [cmdk-group]:not([hidden]) ~ [cmdk-group]": {
        pt: "0",
      },
      "& [cmdk-group]": {
        px: "2",
      },
      "& [data-slot=command-input-wrapper]": {
        h: "12",
      },
      "& [cmdk-input-wrapper] svg": {
        w: "5",
        h: "5",
      },
      "& [cmdk-input]": {
        h: "12",
      },
      "& [cmdk-item]": {
        px: "2",
        py: "3",
        "& svg": {
          w: "5",
          h: "5",
        },
      },
    },

    input: {
      display: "flex",
      w: "full",
      h: "10",
      rounded: "md",
      bg: "transparent",
      py: "3",
      textStyle: "sm",
      outline: "none",
      _placeholder: {
        color: "muted.fg",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },

    list: {
      maxH: "300px",
      scrollPaddingBlock: "1",
      overflowX: "hidden",
      overflowY: "auto",
    },

    empty: {
      py: "6",
      textStyle: "sm",
      textAlign: "center",
    },

    group: {
      overflow: "hidden",
      p: "1",
      color: "fg",
      "& [cmdk-group-heading]": {
        px: "2",
        py: "1.5",
        textStyle: "xs",
        fontWeight: "medium",
        color: "muted.fg",
      },
    },

    separator: {
      mx: "-1",
      h: "1px",
      bg: "border",
    },

    item: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2",
      cursor: "default",
      userSelect: "none",
      rounded: "sm",
      px: "2",
      py: "1.5",
      textStyle: "sm",
      outline: "none",
      "&[data-disabled=true]": {
        pointerEvents: "none",
        opacity: "0.5",
      },
      "&[data-selected=true]": {
        bg: "accent",
        color: "accent.fg",
      },
      "& svg": {
        w: "4",
        h: "4",
        flexShrink: "0",
      },
    },

    shortcut: {
      ml: "auto",
      textStyle: "xs",
      letterSpacing: "widest",
      color: "muted.fg",
    },
  },
});
