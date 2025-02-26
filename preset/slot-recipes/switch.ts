import { defineSlotRecipe } from "@pandacss/dev";

export const switchSlotRecipe = defineSlotRecipe({
  className: "switch",
  slots: ["root", "thumb"],
  base: {
    root: {
      display: "inline-flex",
      w: "11",
      h: "6",
      flexShrink: "0",
      cursor: "pointer",
      alignItems: "center",
      rounded: "full",
      borderWidth: "2px",
      borderColor: "transparent",
      transition: "colors",
      _focusVisible: {
        outline: "none",
        ringWidth: "2px",
        ringColor: "ring",
        ringOffset: "2px",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "&[data-state=checked]": {
        bg: "primary",
        borderColor: "primary",
      },
      "&[data-state=unchecked]": {
        bg: "input",
      },
    },

    thumb: {
      pointerEvents: "none",
      display: "block",
      w: "5",
      h: "5",
      rounded: "full",
      bg: "bg",
      shadow: "lg",
      outlineWidth: "0",
      transition: "transform",
      "&[data-state=checked]": {
        translateX: "5",
      },
      "&[data-state=unchecked]": {
        translateX: "0",
      },
    },
  },
});
