import { defineRecipe } from "@pandacss/dev";

export const chipRecipe = defineRecipe({
  className: "chip",
  base: {
    display: "inline-flex",
    alignItems: "center",
    rounded: "full",
    gap: "2",
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
        textStyle: "2xs",
        px: "1",
        minH: "4",
      },
      sm: {
        textStyle: "xs",
        px: "1.5",
        minH: "5",
      },
      md: {
        textStyle: "sm",
        px: "2",
        minH: "6",
      },
      lg: {
        textStyle: "sm",
        px: "2.5",
        minH: "7",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
