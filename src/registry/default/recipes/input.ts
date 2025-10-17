import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    display: "flex",
    w: "full",
    minW: "0",
    h: "9",
    bg: "transparent",
    px: "3",
    py: "1",
    rounded: "md",
    borderWidth: "1px",
    borderColor: "input",
    shadow: "xs",
    transition: "common",
    outlineColor: "transparent",
    _placeholder: {
      color: "muted.fg",
    },
    _selection: {
      bg: "primary",
      color: "primary.fg",
    },
    _file: {
      display: "inline-flex",
      bg: "transparent",
      color: "fg",
      fontWeight: "medium",
      textStyle: "sm",
      borderWidth: "0",
    },
    _focusVisible: {
      borderColor: "ring",
      outlineWidth: "3px",
      outlineStyle: "solid",
      outlineColor: "ring/50",
    },
    _disabled: {
      pointerEvents: "none",
      cursor: "not-allowed",
      opacity: "0.5",
    },
    "&[aria-invalid=true]": {
      borderColor: "danger!",
      outlineColor: "danger/20!",
      _dark: {
        outlineColor: "danger/40!",
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
