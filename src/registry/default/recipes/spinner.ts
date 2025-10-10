import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
  className: "spinner",
  base: {
    w: "4",
    h: "4",
    animation: "spin",
  },
});
