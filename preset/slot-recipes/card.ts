import { defineSlotRecipe } from "@pandacss/dev";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "title", "description", "content", "footer"],
  base: {
    root: {
      bg: "card",
      color: "card.fg",
      rounded: "lg",
      borderWidth: "1px",
      shadow: "sm",
    },

    header: {
      display: "flex",
      flexDir: "column",
      gap: "1.5",
      p: "6",
    },

    title: {
      textStyle: "2xl",
      fontWeight: "semibold",
      lineHeight: "none",
      letterSpacing: "tight",
    },

    description: {
      textStyle: "sm",
      color: "muted.fg",
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
