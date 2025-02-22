import { defineRecipe } from "@pandacss/dev";

export const separatorRecipe = defineRecipe({
  className: "separator",
  base: {
    flexShrink: "0",
    bg: "border",
    _horizontal: {
      w: "full",
      h: "1px",
    },
    _vertical: {
      w: "1px",
      h: "full",
    },
  },
});
