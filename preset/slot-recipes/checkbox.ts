import { defineSlotRecipe } from "@pandacss/dev";

export const checkboxSlotRecipe = defineSlotRecipe({
  className: "checkbox",
  slots: ["root", "indicator"],
  base: {
    root: {
      w: "4",
      h: "4",
      flexShrink: "0",
      rounded: "sm",
      borderWidth: "1",
      borderColor: "fg",
      _focusVisible: {
        outlineStyle: "solid",
        ringWidth: "2",
        ringColor: "ring",
        ringOffset: "0.5",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      _checked: {
        bg: "solid",
        color: "solid.fg",
        borderColor: "solid",
      },
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "currentColor",
    },
  },
});
