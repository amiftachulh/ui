import { defineRecipe } from "@pandacss/dev";

export const toggleRecipe = defineRecipe({
  className: "toggle",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    textStyle: "sm",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    rounded: "md",
    outlineColor: "transparent",
    cursor: "pointer",
    transition: "all",
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    _focusVisible: {
      borderColor: "ring",
      outlineWidth: "3px",
      outlineStyle: "solid",
      outlineColor: "ring/50",
    },
    "&[aria-invalid=true]": {
      borderColor: "danger",
      outlineColor: "danger/20",
      _dark: {
        outlineColor: "danger/40",
      },
    },
    "& svg": {
      w: "4",
      h: "4",
      flexShrink: "0",
      pointerEvents: "none",
    },
  },

  variants: {
    variant: {
      plain: {
        bg: "transparent",
        _hover: {
          bg: "muted",
        },
        "&[data-state=on]": {
          bg: "accent",
        },
      },
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "input",
        shadow: "xs",
        _hover: {
          bg: "muted",
        },
        "&[data-state=on]": {
          bg: "accent",
        },
      },
    },

    size: {
      sm: {
        h: "8",
        px: "1.5",
        minW: "8",
      },
      md: {
        h: "9",
        px: "2",
        minW: "9",
      },
      lg: {
        h: "10",
        px: "2.5",
        minW: "10",
      },
    },
  },

  defaultVariants: {
    variant: "plain",
    size: "md",
  },
});
