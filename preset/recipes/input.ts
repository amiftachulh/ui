import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    display: "flex",
    w: "full",
    bg: "bg",
    rounded: "md",
    borderWidth: "1px",
    transition: "common",
    _file: {
      bg: "transparent",
      fontWeight: "medium",
      color: "fg",
    },
    _focusVisible: {
      outline: "none",
      focusRing: "2",
      focusRingColor: "ring",
      focusRingOffset: "2",
      focusRingOffsetColor: "bg",
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
