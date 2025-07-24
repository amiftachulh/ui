import { defineSlotRecipe } from "@pandacss/dev";

export const toastSlotRecipe = defineSlotRecipe({
  className: "toast",
  slots: ["root", "viewport", "action", "close", "title", "description"],
  base: {
    root: {
      pointerEvents: "auto",
      pos: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      w: "full",
      gap: "4",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      p: "6",
      pr: "8",
      shadow: "lg",
      transition: "all",
      "&[data-swipe=cancel]": {
        transform: "translateX(0)",
      },
      "&[data-swipe=end]": {
        transform: "translateX(var(--radix-toast-swipe-end-x))",
        animateOut: true,
      },
      "&[data-swipe=move]": {
        transform: "translateX(var(--radix-toast-swipe-move-x))",
        transition: "none",
      },
      "&[data-state=open]": {
        animateIn: true,
        slideInFromTop: "100%",
        sm: {
          slideInFromBottom: "100%",
        },
      },
      "&[data-state=closed]": {
        animateOut: true,
        fadeOut: "0.8",
        slideOutToRight: "100%",
      },
    },

    viewport: {
      pos: "fixed",
      top: "0",
      zIndex: "100",
      display: "flex",
      maxH: "screen",
      w: "full",
      flexDir: "column-reverse",
      p: "4",
      sm: {
        top: "auto",
        bottom: "0",
        right: "0",
        flexDir: "column",
      },
      md: {
        maxW: "420px",
      },
    },

    action: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      h: "8",
      rounded: "md",
      borderWidth: "1px",
      bg: "transparent",
      px: "3",
      textStyle: "sm",
      fontWeight: "medium",
      transition: "colors",
      _hover: {
        bg: "secondary",
      },
      _focus: {
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },

    close: {
      pos: "absolute",
      top: "2",
      right: "2",
      rounded: "md",
      p: "1",
      color: "fg/50",
      opacity: "0",
      transition: "opacity",
      _hover: {
        color: "fg",
      },
      _focus: {
        opacity: "1",
        outlineWidth: "2px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      _groupHover: {
        opacity: "1",
      },
    },

    title: {
      textStyle: "sm",
      fontWeight: "semibold",
    },

    description: {
      textStyle: "sm",
      opacity: "0.9",
    },
  },

  variants: {
    variant: {
      plain: {
        root: {
          bg: "bg",
          fg: "fg",
        },
      },

      danger: {
        root: {
          bg: "red.50",
          fg: "red.800",
          borderColor: "red.200",
          _dark: {
            bg: "red.900",
            fg: "red.100",
            borderColor: "red.700",
          },
          "& .toast__action": {
            color: "red.800",
            borderColor: "red.200",
            _dark: {
              color: "red.100",
              borderColor: "red.700",
            },
            _hover: {
              bg: "red.100",
              _dark: {
                bg: "red.950",
              },
            },
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: "plain",
  },

  staticCss: ["*"],
});
