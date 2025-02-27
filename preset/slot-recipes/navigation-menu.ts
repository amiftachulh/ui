import { defineSlotRecipe } from "@pandacss/dev";

export const navigationMenuSlotRecipe = defineSlotRecipe({
  className: "navigation-menu",
  slots: [
    "root",
    "list",
    "item",
    "trigger",
    "content",
    "link",
    "viewportWrapper",
    "viewport",
    "indicator",
  ],
  base: {
    root: {
      pos: "relative",
      zIndex: "10",
      display: "flex",
      maxW: "max",
      flex: "1",
      alignItems: "center",
      justifyContent: "center",
    },

    list: {
      display: "flex",
      flex: "1",
      listStyleType: "none",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
    },

    item: {
      "& > [data-radix-collection-item]": {
        display: "inline-flex",
        h: "10",
        w: "max",
        alignItems: "center",
        justifyContent: "center",
        rounded: "md",
        bg: "bg",
        px: "4",
        py: "2",
        textStyle: "sm",
        fontWeight: "medium",
        transition: "colors",
        cursor: "pointer",
        _hover: {
          bg: "accent",
          color: "accent.fg",
        },
        _focus: {
          bg: "accent",
          color: "accent.fg",
          outline: "none",
        },
        _disabled: {
          pointerEvents: "none",
          opacity: "50",
        },
        "&[data-active]": {
          bg: "accent/50",
        },
        "&[data-state=open]": {
          bg: "accent/50",
        },
      },
    },

    trigger: {
      "& > svg": {
        pos: "relative",
        top: "1px",
        ml: "1",
        h: "3",
        w: "3",
        transition: "all",
        transitionDuration: "normal",
      },

      "&[data-state=open]": {
        _hover: {
          "& > svg": {
            transform: "rotate(180deg)",
          },
        },
      },
    },

    content: {
      left: "0",
      top: "0",
      w: "full",
      "&[data-motion^=from-]": {
        animateIn: true,
        fadeIn: "0",
      },
      "&[data-motion^=to-]": {
        animateOut: true,
        fadeOut: "0",
      },
      "&[data-motion=from-end]": {
        slideInFromRight: "52",
      },
      "&[data-motion=from-start]": {
        slideInFromLeft: "52",
      },
      "&[data-motion=to-end]": {
        slideOutToRight: "52",
      },
      "&[data-motion=to-start]": {
        slideOutToLeft: "52",
      },
      md: {
        pos: "absolute",
        w: "auto",
      },
    },

    viewportWrapper: {
      pos: "absolute",
      left: "0",
      top: "100%",
      display: "flex",
      justifyContent: "center",
    },

    viewport: {
      transformOrigin: "top center",
      pos: "relative",
      mt: "1.5",
      h: "var(--radix-navigation-menu-viewport-height)",
      w: "full",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bg: "popover",
      color: "popover.fg",
      shadow: "lg",
      "&[data-state=open]": {
        animateIn: true,
        zoomIn: "90",
      },
      "&[data-state=closed]": {
        animateOut: true,
        zoomOut: "95",
      },
      md: {
        w: "var(--radix-navigation-menu-viewport-width)",
      },
    },

    indicator: {
      top: "100%",
      zIndex: "1",
      display: "flex",
      h: "1.5",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden",
      "&[data-state=visible]": {
        animateIn: true,
        fadeIn: "0",
      },
      "&[data-state=hidden]": {
        animateOut: true,
        fadeOut: "0",
      },
      "& > div": {
        position: "relative",
        top: "60%",
        h: "2",
        w: "2",
        transform: "rotate(45deg)",
        roundedTopLeft: "sm",
        bg: "border",
        shadow: "md",
      },
    },
  },
});
