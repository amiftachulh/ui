import { defineSlotRecipe } from "@pandacss/dev";

export const drawerSlotRecipe = defineSlotRecipe({
  className: "drawer",
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
      bg: "black/80",
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
      gap: "4",
      bg: "bg",
      p: "6",
      shadow: "lg",
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
      spaceY: "1.5",
    },

    title: {
      textStyle: "lg",
      fontWeight: "semibold",
      lineHeight: "none",
      letterSpacing: "tight",
    },

    description: {
      textStyle: "sm",
      color: "fg.muted",
    },

    footer: {
      display: "flex",
      flexDir: "column-reverse",
      sm: {
        flexDir: "row",
        justifyContent: "flex-end",
        gap: "2",
      },
    },
  },
  variants: {
    side: {
      top: {
        content: {
          insetX: "0",
          top: "0",
          borderBottomWidth: "1",
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
          borderTopWidth: "1",
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
          borderRightWidth: "1",
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
          borderLeftWidth: "1",
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
