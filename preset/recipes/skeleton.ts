import { defineRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineRecipe({
  className: "skeleton",
  base: {
    animation: "pulse",
    rounded: "md",
    bg: "muted",
  },
});
