import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
  className: "textarea",
  base: {
    display: "flex",
    minH: "80px",
    w: "full",
    rounded: "md",
    borderWidth: "1px",
    borderColor: "input",
    bg: "bg",
    px: "3",
    py: "2",
    textStyle: "md",
    _placeholder: {
      color: "muted.fg",
    },
    _focusVisible: {
      outline: "none",
      focusRing: "2",
      focusRingColor: "ring",
      focusRingOffset: "2",
      focusRingOffsetColor: "bg",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    md: {
      textStyle: "sm",
    },
  },
});
