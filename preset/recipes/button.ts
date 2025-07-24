import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    pos: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    flexShrink: "0",
    whiteSpace: "nowrap",
    borderWidth: "1px",
    borderColor: "transparent",
    rounded: "md",
    textStyle: "sm",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "all",
    outlineColor: "transparent",
    _focusVisible: {
      borderColor: "ring",
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: "ring/50",
    },
    _disabled: {
      pointerEvents: "none",
      opacity: "0.5",
    },
    _invalid: {
      borderColor: "danger",
      outlineColor: "danger/20",
    },
    "& svg": {
      pointerEvents: "none",
      w: "4",
      h: "4",
      flexShrink: "0",
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
        bg: "primary",
        color: "primary.fg",
        shadow: "xs",
        _hover: {
          bg: "primary/90",
        },
      },
      secondary: {
        bg: "secondary",
        color: "secondary.fg",
        shadow: "xs",
        _hover: {
          bg: "secondary/80",
        },
      },
      danger: {
        bg: "danger",
        color: "white",
        shadow: "xs",
        _hover: {
          bg: "danger/90",
        },
        _focusVisible: {
          outlineColor: "danger/20",
        },
        _dark: {
          bg: "danger/60",
          _focusVisible: {
            outlineColor: "danger/40",
          },
        },
      },
      outline: {
        bg: "bg",
        borderWidth: "1px",
        shadow: "xs",
        _hover: {
          bg: "accent",
          color: "accent.fg",
        },
        _dark: {
          bg: "input/30",
          borderColor: "input",
          _hover: {
            bg: "input/50",
          },
        },
      },
      ghost: {
        _hover: {
          bg: "accent",
          color: "accent.fg",
        },
        _dark: {
          _hover: {
            bg: "accent/50",
          },
        },
      },
      link: {
        color: "primary",
        textUnderlineOffset: "4px",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      sm: {
        h: "8",
        gap: "1.5",
        px: "3",
        "&:has(svg)": {
          px: "2.5",
        },
      },
      md: {
        h: "9",
        px: "4",
        py: "2",
        "&:has(svg)": {
          px: "3",
        },
      },
      lg: {
        h: "10",
        px: "6",
        "&:has(svg)": {
          px: "4",
        },
      },
      icon: {
        w: "9",
        h: "9",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
