import { defineRecipe } from "@pandacss/dev";

export const skeletonRecipe = defineRecipe({
  className: "skeleton",
  base: {
    bg: "accent",
    animation: "pulse",
    rounded: "md",
  },
});
