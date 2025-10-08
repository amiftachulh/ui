import { defineRecipe } from "@pandacss/dev";

export const kbdGroupRecipe = defineRecipe({
  className: "kbd-group",
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1",
  },
});
