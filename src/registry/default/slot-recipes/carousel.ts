import { defineSlotRecipe } from "@pandacss/dev";

export const carouselSlotRecipe = defineSlotRecipe({
  className: "carousel",
  slots: ["root", "content", "item", "previous", "next"],
  base: {
    root: {
      pos: "relative",
    },

    content: {
      display: "flex",
      _horizontal: {
        ml: "-4",
      },
      _vertical: {
        mt: "-4",
        flexDir: "column",
      },
    },

    item: {
      minW: "0",
      flexShrink: "0",
      flexGrow: "0",
      flexBasis: "full",
      _horizontal: {
        pl: "4",
      },
      _vertical: {
        pt: "4",
      },
    },
  },
});
