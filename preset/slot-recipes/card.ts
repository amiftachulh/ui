import { defineSlotRecipe } from "@pandacss/dev";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "title", "description", "content", "footer"],
  base: {
    root: {
      bg: "card",
      color: "card.fg",
      display: "flex",
      flexDir: "column",
      gap: "6",
      rounded: "xl",
      borderWidth: "1px",
      py: "6",
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
      fontWeight: "semibold",
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    content: {
      px: "6",
    },

    footer: {
      display: "flex",
      alignItems: "center",
      px: "6",
    },
  },
});
