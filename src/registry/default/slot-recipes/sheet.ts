import { defineSlotRecipe } from "@pandacss/dev";

export const sheetSlotRecipe = defineSlotRecipe({
  className: "sheet",
  slots: [
    "root",
    "trigger",
    "portal",
    "overlay",
    "header",
    "title",
    "description",
    "content",
    "footer",
    "close",
  ],
  base: {
    overlay: {
      pos: "fixed",
      inset: "0",
      zIndex: "50",
      bg: "black/50",
      _open: {
        animateIn: true,
        fadeIn: "0",
      },
      _closed: {
        animateOut: true,
        fadeOut: "0",
      },
    },

    content: {
      pos: "fixed",
      zIndex: "50",
      display: "flex",
      flexDir: "column",
      gap: "4",
      bg: "bg",
      shadow: "lg",
      transition: "all",
      transitionTimingFunction: "ease-in-out",
      _open: {
        animateIn: true,
        animationDuration: "slower",
        animationTimingFunction: "ease-out",
      },
      _closed: {
        animateOut: true,
        animationDuration: "slow",
        animationTimingFunction: "ease-in",
      },
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "1.5",
      p: "4",
    },

    title: {
      color: "fg",
      fontWeight: "semibold",
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    footer: {
      mt: "auto",
      display: "flex",
      flexDir: "column",
      gap: "2",
      p: "4",
    },
  },
  variants: {
    side: {
      top: {
        content: {
          insetX: "0",
          top: "0",
          borderBottomWidth: "1px",
          _open: {
            slideInFromTop: "100%",
          },
          _closed: {
            slideOutToTop: "100%",
          },
        },
      },

      bottom: {
        content: {
          insetX: "0",
          bottom: "0",
          borderTopWidth: "1px",
          _open: {
            slideInFromBottom: "100%",
          },
          _closed: {
            slideOutToBottom: "100%",
          },
        },
      },

      left: {
        content: {
          insetY: "0",
          left: "0",
          w: "3/4",
          h: "full",
          borderRightWidth: "1px",
          _open: {
            slideInFromLeft: "100%",
          },
          _closed: {
            slideOutToLeft: "100%",
          },
          sm: {
            maxW: "sm",
          },
        },
      },

      right: {
        content: {
          insetY: "0",
          right: "0",
          w: "3/4",
          h: "full",
          borderLeftWidth: "1px",
          _open: {
            slideInFromRight: "100%",
          },
          _closed: {
            slideOutToRight: "100%",
          },
          sm: {
            maxW: "sm",
          },
        },
      },
    },
  },
  defaultVariants: {
    side: "right",
  },
});
