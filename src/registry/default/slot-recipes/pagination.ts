import { defineSlotRecipe } from "@pandacss/dev";

export const paginationSlotRecipe = defineSlotRecipe({
  className: "pagination",
  slots: ["root", "content", "item", "link", "previous", "next", "ellipsis"],
  base: {
    root: {
      mx: "auto",
      display: "flex",
      w: "full",
      justifyContent: "center",
    },

    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1",
    },

    previous: {
      gap: "1",
      px: "2.5",
      sm: {
        pl: "2.5",
      },
    },

    next: {
      gap: "1",
      px: "2.5",
      sm: {
        pr: "2.5",
      },
    },

    ellipsis: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: "9",
      h: "9",
    },
  },
});
