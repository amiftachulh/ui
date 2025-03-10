import { defineSlotRecipe } from "@pandacss/dev";

export const dialogSlotRecipe = defineSlotRecipe({
  className: "dialog",
  slots: ["trigger", "overlay", "content", "header", "title", "description", "footer", "close"],
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
      left: "50%",
      top: "50%",
      zIndex: "50",
      display: "grid",
      w: "full",
      maxW: "lg",
      transform: "translate(-50%, -50%)",
      gap: "4",
      borderWidth: "1px",
      bg: "bg",
      p: "6",
      rounded: "md",
      shadow: "lg",
      _open: {
        animateIn: true,
        fadeIn: "0",
        zoomIn: "95",
        slideInFromLeft: "50%",
        slideInFromTop: "48%",
      },
      _closed: {
        animateOut: true,
        fadeOut: "0",
        zoomOut: "95",
        slideOutToLeft: "50%",
        slideOutToTop: "48%",
      },
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "1.5",
    },

    title: {
      textStyle: "lg",
      fontWeight: "semibold",
      lineHeight: "none",
      letterSpacing: "tight",
    },

    description: {
      textStyle: "sm",
      color: "muted.fg",
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
});
