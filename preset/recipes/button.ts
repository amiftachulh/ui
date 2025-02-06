import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    pos: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    whiteSpace: "nowrap",
    borderWidth: "1px",
    borderColor: "transparent",
    rounded: "md",
    textStyle: "sm",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "background-color 0.2s",
    _focusVisible: {
      outlineStyle: "solid",
      ringWidth: "2",
      ringColor: "ring",
      ringOffset: "0.5",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    "& svg": {
      pointerEvents: "none",
      w: "4",
      h: "4",
      flexShrink: "0",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "solid",
        color: "solid.fg",
        _hover: {
          bg: "solid.hover",
        },
        _active: {
          bg: "solid.hover/90",
        },
      },
      subtle: {
        bg: "subtle",
        fg: "subtle.fg",
        _hover: {
          bg: "subtle.hover",
        },
        _active: {
          bg: "subtle.active",
        },
      },
      outline: {
        borderColor: "border",
        _hover: {
          bg: "subtle",
        },
        _active: {
          bg: "subtle.hover",
        },
      },
      ghost: {
        _hover: {
          bg: "subtle",
        },
        _active: {
          bg: "subtle.hover",
        },
      },
    },
    size: {
      sm: {
        h: "9",
        px: "3",
      },
      md: {
        h: "10",
        px: "4",
        py: "2",
      },
      lg: {
        h: "11",
        px: "8",
      },
      icon: {
        w: "10",
        h: "10",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
