import { defineRecipe } from "@pandacss/dev";

export const badgeRecipe = defineRecipe({
  className: "badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    rounded: "full",
    gap: "1",
    py: "0.5",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    borderWidth: "1px",
    borderColor: "transparent",
    whiteSpace: "nowrap",
    userSelect: "none",
    transition: "background-color 0.2s",
  },
  variants: {
    variant: {
      primary: {
        bg: "primary",
        color: "primary.fg",
      },
      secondary: {
        bg: "secondary",
      },
      outline: {
        borderColor: "border",
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
