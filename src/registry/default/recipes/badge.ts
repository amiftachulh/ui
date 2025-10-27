import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    flexShrink: "0",
    overflow: "hidden",
    w: "fit",
    py: "0.5",
    textStyle: "xs",
    fontWeight: "medium",
    borderWidth: "1px",
    rounded: "full",
    whiteSpace: "nowrap",
    transition: "colors",
    outlineColor: "transparent",
    "& > svg": {
      w: "3",
      h: "3",
      pointerEvents: "none",
    },
    _focusVisible: {
      borderColor: "ring",
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: "ring/50",
    },
    _invalid: {
      outlineColor: "danger/20",
      borderColor: "danger",
    },
    _dark: {
      _invalid: {
        outlineColor: "danger/40",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        borderColor: "transparent",
        bg: "primary",
        color: "primary.fg",
        "a &": {
          _hover: {
            bg: "primary/90",
          },
        },
      },
      secondary: {
        borderColor: "transparent",
        bg: "secondary",
        color: "secondary.fg",
        "a &": {
          _hover: {
            bg: "secondary/90",
          },
        },
      },
      danger: {
        borderColor: "transparent",
        bg: "danger",
        color: "white",
        "a &": {
          _hover: {
            bg: "danger/90",
          },
        },
        _focusVisible: {
          outlineColor: "danger/20",
        },
        _dark: {
          _focusVisible: {
            bg: "danger/60",
            outlineColor: "danger/40",
          },
        },
      },
      outline: {
        color: "fg",
        "a &": {
          _hover: {
            bg: "accent",
            color: "accent.fg",
          },
        },
      },
    },
    size: {
      xs: {
        textStyle: "xs",
        px: "1",
      },
      sm: {
        textStyle: "xs",
        px: "1.5",
      },
      md: {
        textStyle: "sm",
        px: "2",
      },
      lg: {
        textStyle: "sm",
        px: "2.5",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
