import { defineRecipe } from "@pandacss/dev";

export const labelRecipe = defineRecipe({
  className: "label",
  base: {
    textStyle: "sm",
    fontWeight: "medium",
    lineHeight: "none",
    userSelect: "none",
    _peerDisabled: {
      cursor: "not-allowed",
      opacity: "0.7",
    },
  },
});
