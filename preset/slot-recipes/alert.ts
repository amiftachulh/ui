import { defineSlotRecipe } from "@pandacss/dev";

export const alertSlotRecipe = defineSlotRecipe({
  className: "alert",
  slots: ["root", "icon", "content", "title", "description"],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      p: "4",
      rounded: "md",
      borderWidth: "1px",
      bg: "bg",
      color: "fg",
    },

    icon: {
      mr: "3",
      flexShrink: "0",
      "& > svg": {
        w: "5",
        h: "5",
        color: "fg",
      },
    },

    content: {
      flex: "1",
    },

    title: {
      mb: "1",
      fontWeight: "medium",
      lineHeight: "none",
      letterSpacing: "tight",
    },

    description: {
      textStyle: "sm",
    },
  },

  variants: {
    variant: {
      info: {
        root: {
          bg: "blue.50",
          color: "blue.800",
          borderColor: "blue.200",
          _dark: {
            bg: "blue.900",
            color: "blue.100",
            borderColor: "blue.700",
          },
        },

        icon: {
          "& > svg": {
            color: "blue.500",
            _dark: {
              color: "blue.300",
            },
          },
        },

        title: {
          color: "blue.800",
          _dark: {
            color: "blue.100",
          },
        },

        description: {
          color: "blue.700",
          _dark: {
            color: "blue.200",
          },
        },
      },

      success: {
        root: {
          bg: "green.50",
          color: "green.800",
          borderColor: "green.200",
          _dark: {
            bg: "green.900",
            color: "green.100",
            borderColor: "green.700",
          },
        },

        icon: {
          "& > svg": {
            color: "green.500",
            _dark: {
              color: "green.300",
            },
          },
        },

        title: {
          color: "green.800",
          _dark: {
            color: "green.100",
          },
        },

        description: {
          color: "green.700",
          _dark: {
            color: "green.200",
          },
        },
      },

      warning: {
        root: {
          bg: "yellow.50",
          color: "yellow.800",
          borderColor: "yellow.200",
          _dark: {
            bg: "yellow.900",
            color: "yellow.100",
            borderColor: "yellow.700",
          },
        },

        icon: {
          "& > svg": {
            color: "yellow.500",
            _dark: {
              color: "yellow.300",
            },
          },
        },

        title: {
          color: "yellow.800",
          _dark: {
            color: "yellow.100",
          },
        },

        description: {
          color: "yellow.700",
          _dark: {
            color: "yellow.200",
          },
        },
      },

      danger: {
        root: {
          bg: "red.50",
          color: "red.800",
          borderColor: "red.200",
          _dark: {
            bg: "red.900",
            color: "red.100",
            borderColor: "red.700",
          },
        },

        icon: {
          "& > svg": {
            color: "red.500",
            _dark: {
              color: "red.300",
            },
          },
        },

        title: {
          color: "red.800",
          _dark: {
            color: "red.100",
          },
        },

        description: {
          color: "red.700",
          _dark: {
            color: "red.200",
          },
        },
      },
    },
  },
});
