import { defineSlotRecipe } from "@pandacss/dev";

export const vaulSlotRecipe = defineSlotRecipe({
  className: "vaul",
  slots: ["trigger", "overlay", "content", "header", "title", "description", "footer", "close"],
  base: {
    overlay: {
      pos: "fixed",
      inset: "0",
      zIndex: "50",
      bg: "black/80",
    },

    content: {
      pos: "fixed",
      insetInline: "0",
      bottom: "0",
      zIndex: "50",
      mt: "24",
      display: "flex",
      h: "auto",
      flexDir: "column",
      roundedTop: "md",
      borderWidth: "1px",
      bg: "bg",
    },

    header: {
      display: "grid",
      gap: "1.5",
      p: "4",
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
      mt: "auto",
      display: "flex",
      flexDir: "column",
      gap: "2",
      p: "4",
    },
  },
});
