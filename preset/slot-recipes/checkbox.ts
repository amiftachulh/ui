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
        outline: "none",
        focusRing: "2",
        focusRingColor: "ring",
        focusRingOffset: "2",
        focusRingOffsetColor: "bg",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      _checked: {
        bg: "primary",
        color: "primary.fg",
        borderColor: "primary",
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
