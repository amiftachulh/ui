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
      outlineStyle: "primary",
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
      primary: {
        bg: "primary",
        color: "primary.fg",
        _hover: {
          bg: "primary.hover",
        },
      },
      secondary: {
        bg: "secondary",
        fg: "secondary.fg",
        _hover: {
          bg: "secondary.hover",
        },
      },
      outline: {
        bg: "bg",
        borderColor: "border",
        _hover: {
          bg: "accent",
          color: "accent.fg",
        },
      },
      ghost: {
        _hover: {
          bg: "accent",
          color: "accent.fg",
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
    variant: "primary",
    size: "md",
  },
});
