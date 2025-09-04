import { defineSlotRecipe } from "@pandacss/dev";

export const navigationMenuSlotRecipe = defineSlotRecipe({
  className: "navigation-menu",
  slots: ["root", "list", "item", "trigger", "content", "link", "viewport", "indicator"],
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
      pos: "relative",
    },

    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5",
      px: "3",
      py: "2",
      rounded: "md",
      textStyle: "sm",
      outline: "none",
      _hover: {
        bg: "accent",
      },
      "& > svg": {
        pos: "relative",
        top: "1px",
        ml: "1",
        h: "3",
        w: "3",
        transition: "all",
        transitionDuration: "normal",
      },
      _open: {
        _hover: {
          "& > svg": {
            transform: "rotate(180deg)",
          },
        },
      },
    },

    link: {
      display: "block",
      textDecoration: "none",
      px: "3",
      py: "2",
      rounded: "md",
      outline: "none",
      textStyle: "sm",
      _hover: {
        bg: "accent",
      },
    },

    content: {
      pos: "absolute",
      top: "0",
      left: "0",
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
        w: "auto",
      },
      ".navigation-menu__root[data-viewport=false] &": {
        top: "100%",
        overflow: "hidden",
        mt: "1.5",
        bg: "popover",
        color: "popover.fg",
        borderWidth: "1px",
        rounded: "md",
        shadow: "md",
        animationDuration: "fast",
        _open: {
          animateIn: true,
          zoomIn: "95",
          fadeIn: "0",
        },
        _closed: {
          animateOut: true,
          zoomOut: "95",
          fadeOut: "0",
        },
      },
    },

    viewport: {
      pos: "relative",
      transformOrigin: "top center",
      mt: "1.5",
      w: "full",
      h: "var(--radix-navigation-menu-viewport-height)",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bg: "popover",
      color: "popover.fg",
      shadow: "lg",
      _open: {
        animateIn: true,
        zoomIn: "90",
      },
      _closed: {
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
    },
  },
});
