import { defineSlotRecipe } from "@pandacss/dev";

export const dialogSlotRecipe = defineSlotRecipe({
  className: "dialog",
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
      bg: "bg/80",
      _open: {
        animateIn: true,
        fadeIn: "0",
      },
      _closed: {
        animateOut: true,
        fadeOut: "0",
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

    content: {
      pos: "fixed",
      bottom: "0",
      left: "0",
      zIndex: "50",
      display: "grid",
      w: "full",
      maxW: "full",
      gap: "4",
      borderWidth: "1px",
      bg: "bg",
      p: "6",
      roundedTop: "md",
      shadow: "lg",
      _open: {
        animateIn: true,
        fadeIn: "0",
        slideInFromBottom: "100%",
      },
      _closed: {
        animateOut: true,
        fadeOut: "0",
        slideOutToBottom: "100%",
      },
      md: {
        maxW: "lg",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bottom: "auto",
        rounded: "md",
        _open: {
          slideInFromBottom: "0",
          zoomIn: "95",
          slideInFromLeft: "50%",
          slideInFromTop: "48%",
        },
        _closed: {
          slideOutToBottom: "0",
          zoomOut: "95",
          slideOutToLeft: "50%",
          slideOutToTop: "48%",
        },
      },
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
