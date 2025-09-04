import { defineSlotRecipe } from "@pandacss/dev";

export const cardSlotRecipe = defineSlotRecipe({
  className: "card",
  slots: ["root", "header", "title", "description", "action", "content", "footer"],
  base: {
    root: {
      bg: "card",
      color: "card.fg",
      display: "flex",
      flexDir: "column",
      gap: "6",
      py: "6",
      rounded: "xl",
      borderWidth: "1px",
      shadow: "sm",
    },

    header: {
      containerType: "inline-size",
      containerName: "card-header",
      display: "grid",
      gridAutoRows: "min",
      gridTemplateRows: "auto auto",
      alignItems: "flex-start",
      gap: "1.5",
      px: "6",
      "&:has(.card__action)": {
        gridTemplateColumns: "1fr auto",
      },
    },

    title: {
      fontWeight: "semibold",
      lineHeight: "none",
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    action: {
      gridColumnStart: "2",
      gridRow: "span 2 / span 2",
      gridRowStart: "1",
      alignSelf: "flex-start",
      justifySelf: "end",
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
