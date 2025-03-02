import { defineSlotRecipe } from "@pandacss/dev";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "title", "description", "content", "footer"],
  base: {
    root: {
      bg: "card",
      color: "card.fg",
      rounded: "xl",
      borderWidth: "1px",
      shadow: "sm",
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "1.5",
      px: "6",
    },

    title: {
      lineHeight: "none",
      letterSpacing: "tight",
      fontWeight: "semibold",
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    content: {
      p: "6",
      pt: "0",
    },

    footer: {
      display: "flex",
      alignItems: "center",
      p: "6",
      pt: "0",
    },
  },
});
