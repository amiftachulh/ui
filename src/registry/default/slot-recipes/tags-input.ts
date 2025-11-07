import { defineSlotRecipe } from "@pandacss/dev";

export const tagsInputSlotRecipe = defineSlotRecipe({
  className: "tags-input",
  slots: ["container", "list", "item", "itemText", "itemDeleteTrigger", "input", "clearTrigger"],
  base: {
    container: {
      display: "flex",
      flexWrap: "wrap",
      w: "full",
      minW: "0",
      minH: "9",
      bg: "transparent",
      px: "3",
      py: "2",
      rounded: "md",
      borderWidth: "1px",
      borderColor: "input",
      shadow: "xs",
      transition: "common",
      outlineColor: "transparent",
      _focusWithin: {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      "&[aria-disabled=true]": {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "&[aria-invalid=true]": {
        borderColor: "danger!",
        outlineColor: "danger/20!",
        _dark: {
          outlineColor: "danger/40!",
        },
      },
      "&:has([data-slot=tags-input-list]:not(:empty))": {
        gap: "2",
      },
      md: {
        textStyle: "sm",
      },
      _dark: {
        bg: "input/30",
      },
    },

    list: {
      display: "flex",
      flexWrap: "wrap",
      gap: "2",
    },

    item: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      flexShrink: "0",
      overflow: "hidden",
      w: "fit",
      px: "1",
      bg: "secondary",
      borderWidth: "1px",
      borderColor: "transparent",
      rounded: "sm",
      whiteSpace: "nowrap",
      transition: "colors",
      "&[aria-disabled=true]": {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "a &": {
        _hover: {
          bg: "secondary/90",
        },
      },
    },

    itemText: {
      color: "secondary.fg",
      textStyle: "xs",
      fontWeight: "medium",
    },

    itemDeleteTrigger: {
      "&:active": {
        transform: "translateY(1px)",
      },
      "& > svg": {
        w: "3",
        h: "3",
        pointerEvents: "none",
      },
    },

    input: {
      flex: "1",
      minW: "120px",
      bg: "transparent",
      color: "fg",
      outline: "none",
      _placeholder: {
        color: "muted.fg",
      },
    },

    clearTrigger: {},
  },
});
