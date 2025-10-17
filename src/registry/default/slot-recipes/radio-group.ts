import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupSlotRecipe = defineSlotRecipe({
  className: "radio-group",
  slots: ["root", "item", "indicator"],
  base: {
    root: {
      display: "grid",
      gap: "3",
    },

    item: {
      aspectRatio: "square",
      w: "4",
      h: "4",
      flexShrink: "0",
      color: "primary",
      borderWidth: "1px",
      borderColor: "input",
      rounded: "full",
      shadow: "xs",
      transition: "common",
      outlineColor: "transparent",
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
      "&[aria-invalid=true]": {
        borderColor: "danger!",
        outlineColor: "danger/20!",
        _dark: {
          outlineColor: "danger/40!",
        },
      },
      _dark: {
        bg: "input/30",
      },
    },

    indicator: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
