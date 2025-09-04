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

    previous: {
      pos: "absolute",
      w: "8!",
      h: "8!",
      rounded: "full",
      _horizontal: {
        top: "50%",
        left: "-12",
        transform: "translateY(-50%)",
      },
      _vertical: {
        top: "-12",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
      },
    },

    next: {
      pos: "absolute",
      w: "8!",
      h: "8!",
      rounded: "full",
      _horizontal: {
        top: "50%",
        right: "-12",
        transform: "translateY(-50%)",
      },
      _vertical: {
        bottom: "-12",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
      },
    },
  },
});
