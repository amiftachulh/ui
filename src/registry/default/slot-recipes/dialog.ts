import { defineSlotRecipe } from "@pandacss/dev";

export const dialogSlotRecipe = defineSlotRecipe({
  className: "dialog",
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
      top: "50%",
      left: "50%",
      zIndex: "50",
      display: "grid",
      gap: "4",
      w: "full",
      maxW: "calc(100% - 2rem)",
      bg: "bg",
      p: "6",
      borderWidth: "1px",
      rounded: "lg",
      shadow: "lg",
      transform: "translate(-50%, -50%)",
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
      sm: {
        maxW: "lg",
      },
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "2",
      textAlign: "center",
      sm: {
        textAlign: "left",
      },
    },

    title: {
      textStyle: "lg",
      fontWeight: "semibold",
      lineHeight: "none",
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    footer: {
      display: "flex",
      flexDir: "column-reverse",
      gap: "2",
      sm: {
        flexDir: "row",
        justifyContent: "flex-end",
      },
    },
  },
});
