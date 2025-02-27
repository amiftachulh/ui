import { defineSlotRecipe } from "@pandacss/dev";

export const progressSlotRecipe = defineSlotRecipe({
  className: "progress",
  slots: ["root", "indicator"],
  base: {
    root: {
      pos: "relative",
      w: "full",
      h: "4",
      overflow: "hidden",
      rounded: "full",
      bg: "secondary",
    },

    indicator: {
      w: "full",
      h: "full",
      flex: "1",
      bg: "primary",
      transition: "all",
    },
  },
});
