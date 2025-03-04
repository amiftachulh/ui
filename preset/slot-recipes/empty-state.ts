import { defineSlotRecipe } from "@pandacss/dev";

export const emptyStateSlotRecipe = defineSlotRecipe({
  className: "empty-state",
  slots: ["root", "indicator", "content", "title", "description", "actions"],
  base: {
    root: {
      w: "full",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "4",
    },

    indicator: {
      color: "muted.fg",
      "& > svg": {
        w: "1em",
        h: "1em",
      },
    },

    content: {
      display: "flex",
      flexDir: "column",
      alignItems: "center",
    },

    title: {
      textStyle: "lg",
      fontWeight: "semibold",
    },

    description: {
      textStyle: "sm",
      color: "muted.fg",
    },

    actions: {
      display: "flex",
      gap: "2",
    },
  },
});
