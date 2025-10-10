import { defineSlotRecipe } from "@pandacss/dev";

export const kbdSlotRecipe = defineSlotRecipe({
  className: "kbd",
  slots: ["group", "root"],
  base: {
    group: {
      display: "inline-flex",
      alignItems: "center",
      gap: "1",
    },

    root: {
      bg: "muted",
      color: "muted.fg",
      pointerEvents: "none",
      display: "inline-flex",
      w: "fit",
      minW: "5",
      h: "5",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      rounded: "sm",
      px: "1",
      fontFamily: "var(--global-font-body)",
      textStyle: "xs",
      fontWeight: "medium",
      userSelect: "none",
      "& svg": {
        w: "3",
        h: "3",
      },
      ".tooltip__content &": {
        bg: "bg/20",
        color: "bg",
        _dark: {
          bg: "bg/10",
        },
      },
    },
  },
});
