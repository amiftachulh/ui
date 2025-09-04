import { defineSlotRecipe } from "@pandacss/dev";

export const fieldSlotRecipe = defineSlotRecipe({
  className: "field",
  slots: ["root", "label", "control", "description", "error"],
  base: {
    root: {
      display: "grid",
      gap: "1",
    },

    label: {
      display: "flex",
      alignItems: "center",
      justifySelf: "flex-start",
      gap: "2",
      textStyle: "sm",
      lineHeight: "none",
      fontWeight: "medium",
      userSelect: "none",
      "&[aria-invalid=true]": {
        color: "danger",
      },
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
    },

    error: {
      color: "danger",
      textStyle: "sm",
      fontWeight: "medium",
    },
  },
});
