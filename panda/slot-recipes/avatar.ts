import { defineSlotRecipe } from "@pandacss/dev";

export const avatarSlotRecipe = defineSlotRecipe({
  className: "avatar",
  slots: ["root", "image", "fallback"],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      w: "10",
      h: "10",
      flexShrink: "0",
      overflow: "hidden",
      rounded: "full",
    },

    image: {
      aspectRatio: "square",
      w: "full",
      h: "full",
    },

    fallback: {
      display: "flex",
      w: "full",
      h: "full",
      alignItems: "center",
      justifyContent: "center",
      rounded: "full",
      bg: "muted",
    },
  },
});
