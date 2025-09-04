import { defineSlotRecipe } from "@pandacss/dev";

export const switchSlotRecipe = defineSlotRecipe({
  className: "switch",
  slots: ["root", "thumb"],
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      w: "8",
      h: "1.15rem",
      flexShrink: "0",
      rounded: "full",
      borderWidth: "1px",
      borderColor: "transparent",
      shadow: "xs",
      transition: "all",
      outlineColor: "transparent",
      cursor: "pointer",
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
      "&[data-state=checked]": {
        bg: "primary",
        borderColor: "primary",
      },
      "&[data-state=unchecked]": {
        bg: "input",
        _dark: {
          bg: "input/80",
        },
      },
    },

    thumb: {
      display: "block",
      w: "4",
      h: "4",
      rounded: "full",
      bg: "bg",
      shadow: "lg",
      outlineWidth: "0",
      transition: "transform",
      pointerEvents: "none",
      "&[data-state=checked]": {
        transform: "translateX(calc(100% - 2px))",
        _dark: {
          bg: "primary.fg",
        },
      },
      "&[data-state=unchecked]": {
        transform: "translateX(0)",
        _dark: {
          bg: "fg",
        },
      },
    },
  },
});
