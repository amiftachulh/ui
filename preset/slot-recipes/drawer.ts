import { defineSlotRecipe } from "@pandacss/dev";

export const drawerSlotRecipe = defineSlotRecipe({
  className: "drawer",
  slots: ["trigger", "overlay", "content", "header", "title", "description", "footer", "close"],
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
      bg: "bg",
      display: "flex",
      h: "auto",
      flexDir: "column",
      "&[data-vaul-drawer-direction=top]": {
        insetX: "0",
        top: "0",
        mb: "24",
        maxH: "80vh",
        roundedBottom: "lg",
        borderBottomWidth: "1px",
      },
      "&[data-vaul-drawer-direction=bottom]": {
        insetX: "0",
        bottom: "0",
        mt: "24",
        maxH: "80vh",
        roundedTop: "lg",
        borderTopWidth: "1px",
      },
      "&[data-vaul-drawer-direction=right]": {
        insetY: "0",
        right: "0",
        w: "3/4",
        borderLeftWidth: "1px",
        sm: {
          maxW: "sm",
        },
      },
      "&[data-vaul-drawer-direction=left]": {
        insetY: "0",
        left: "0",
        w: "3/4",
        borderRightWidth: "1px",
        sm: {
          maxW: "sm",
        },
      },
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "0.5",
      p: "4",
      "[data-vaul-drawer-direction=top] &": {
        textAlign: "center",
      },
      "[data-vaul-drawer-direction=bottom] &": {
        textAlign: "center",
      },
      md: {
        gap: "1.5",
        textAlign: "left",
      },
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
});
