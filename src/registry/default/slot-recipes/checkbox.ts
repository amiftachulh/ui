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
      borderWidth: "1px",
      borderColor: "input",
      transitionProperty: "outline",
      transitionDuration: "fastest",
      outline: "none",
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
      _checked: {
        bg: "primary",
        color: "primary.fg",
        borderColor: "primary",
      },
      "&[aria-invalid=true]": {
        borderColor: "danger!",
        outlineColor: "danger/20!",
      },
      _dark: {
        bg: "input/30",
        _checked: {
          bg: "primary",
          borderColor: "primary",
        },
        "&[aria-invalid=true]": {
          outlineColor: "danger/40!",
        },
      },
    },

    indicator: {
      display: "grid",
      placeContent: "center",
      color: "currentColor",
      transition: "none",
    },
  },
});
