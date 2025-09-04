import { defineSlotRecipe } from "@pandacss/dev";

export const alertDialogSlotRecipe = defineSlotRecipe({
  className: "alert-dialog",
  slots: [
    "trigger",
    "overlay",
    "content",
    "header",
    "title",
    "description",
    "footer",
    "action",
    "cancel",
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
      left: "50%",
      top: "50%",
      zIndex: "50",
      display: "grid",
      w: "full",
      maxW: "calc(100% - 2rem)",
      transform: "translate(-50%, -50%)",
      gap: "4",
      borderWidth: "1px",
      bg: "bg",
      p: "6",
      rounded: "lg",
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
