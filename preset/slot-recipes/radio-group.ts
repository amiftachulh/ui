import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupSlotRecipe = defineSlotRecipe({
  className: "radio-group",
  slots: ["root", "item", "indicator"],
  base: {
    root: {
      display: "grid",
      gap: "2",
    },

    item: {
      aspectRatio: "square",
      w: "4",
      h: "4",
      rounded: "full",
      borderWidth: "1px",
      borderColor: "primary",
      color: "primary.fg",
      _focus: {
        outline: "none",
      },
      _focusVisible: {
        ringWidth: "2px",
        ringColor: "ring",
        ringOffset: "2px",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },

    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
