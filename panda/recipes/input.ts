import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    display: "flex",
    w: "full",
    bg: "bg",
    rounded: "md",
    borderWidth: "1px",
    _file: {
      bg: "transparent",
    },
    _focusVisible: {
      outlineStyle: "primary",
      ringWidth: "2",
      ringColor: "ring",
      ringOffset: "0.5",
    },
    _disabled: {
      opacity: "0.5",
    },
  },
  variants: {
    size: {
      sm: {
        h: "9",
        px: "2.5",
        textStyle: "sm",
      },
      md: {
        h: "10",
        px: "3",
        textStyle: "sm",
      },
      lg: {
        h: "11",
        px: "3.5",
        textStyle: "md",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
