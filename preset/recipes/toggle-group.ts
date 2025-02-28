import { defineRecipe } from "@pandacss/dev";

export const toggleGroupRecipe = defineRecipe({
  className: "toggle-group",
  base: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1",
  },
});
