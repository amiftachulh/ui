import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
  className: "textarea",
  base: {
    display: "flex",
    w: "full",
    minH: "16",
    bg: "transparent",
    px: "3",
    py: "2",
    fieldSizing: "content",
    borderWidth: "1px",
    borderColor: "input",
    rounded: "md",
    shadow: "xs",
    outlineColor: "transparent",
    transition: "common",
    _placeholder: {
      color: "muted.fg",
    },
    _focusVisible: {
      borderColor: "ring",
      outlineWidth: "3px",
      outlineStyle: "solid",
      outlineColor: "ring/50",
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
    "&[aria-invalid=true]": {
      borderColor: "danger",
      outlineColor: "danger/20",
      _dark: {
        outlineColor: "danger/40",
      },
    },
    md: {
      textStyle: "sm",
    },
    _dark: {
      bg: "input/30",
    },
  },
});
