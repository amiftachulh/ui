import { defineRecipe } from "@pandacss/dev";

export const kbdRecipe = defineRecipe({
  className: "kbd",
  base: {
    pointerEvents: "none",
    display: "inline-flex",
    h: "5",
    userSelect: "none",
    alignItems: "center",
    gap: "1",
    rounded: "md",
    borderWidth: "1px",
    bg: "muted",
    px: "1.5",
    fontFamily: "mono",
    textStyle: "xs",
    fontWeight: "medium",
    color: "muted.fg",
    opacity: "1",
  },
});
