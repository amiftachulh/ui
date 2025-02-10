import { defineSlotRecipe } from "@pandacss/dev";

export const alertSlotRecipe = defineSlotRecipe({
  className: "alert",
  slots: ["root", "title", "description"],
  base: {
    root: {
      pos: "relative",
      w: "full",
      rounded: "lg",
      borderWidth: "1px",
      p: "4",
      "& > svg": {
        pos: "absolute",
        top: "4",
        left: "4",
        "&~*": {
          pl: "7",
        },
        "&+div": {
          transform: "translateY(-3px)",
        },
      },
    },
    title: {
      mb: "1",
      fontWeight: "medium",
      lineHeight: "none",
      letterSpacing: "tight",
    },
    description: {
      textStyle: "sm",
      "& p": {
        letterSpacing: "wide",
      },
    },
  },
  variants: {
    variant: {
      plain: {
        root: {
          bg: "bg",
          color: "fg",
        },
      },
      info: {
        root: {
          bg: "info",
          color: "info.fg",
          borderColor: "info",
        },
      },
      success: {
        root: {
          bg: "success",
          color: "success.fg",
          borderColor: "success",
        },
      },
      warning: {
        root: {
          bg: "warning",
          color: "warning.fg",
          borderColor: "warning",
        },
      },
      danger: {
        root: {
          bg: "danger",
          color: "danger.fg",
          borderColor: "danger",
        },
      },
    },
  },
  defaultVariants: {
    variant: "plain",
  },
});
