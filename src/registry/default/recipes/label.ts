import { defineRecipe } from "@pandacss/dev";

export const labelRecipe = defineRecipe({
  className: "label",
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    textStyle: "sm",
    lineHeight: "none",
    fontWeight: "medium",
    userSelect: "none",
    "[data-disabled=true] &": {
      pointerEvents: "none",
      opacity: "0.5",
    },
    ".peer:disabled ~ &": {
      cursor: "not-allowed",
      opacity: "0.5",
    },
  },
});
