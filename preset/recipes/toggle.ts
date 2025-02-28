import { defineRecipe } from "@pandacss/dev";

export const toggleRecipe = defineRecipe({
  className: "toggle",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    rounded: "md",
    textStyle: "sm",
    fontWeight: "medium",
    outline: "3px solid transparent",
    transition: "colors",
    cursor: "pointer",
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    "& svg": {
      pointerEvents: "none",
      flexShrink: "0",
    },
    _focusVisible: {
      borderWidth: "1px",
      borderColor: "ring",
      outlineColor: "ring/50",
    },
  },

  variants: {
    variant: {
      plain: {
        bg: "transparent",
        _hover: {
          bg: "muted",
          color: "muted.fg",
        },
        "&[data-state=on]": {
          bg: "accent",
          color: "accent.fg",
        },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "input",
        bg: "transparent",
        shadow: "xs",
        _hover: {
          bg: "accent",
          color: "accent.fg",
        },
        "&[data-state=on]": {
          bg: "accent",
          color: "accent.fg",
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
