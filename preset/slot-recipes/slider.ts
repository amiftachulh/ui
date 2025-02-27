import { defineSlotRecipe } from "@pandacss/dev";

export const sliderSlotRecipe = defineSlotRecipe({
  className: "slider",
  slots: ["root", "track", "range", "thumb"],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      w: "full",
      touchAction: "none",
      userSelect: "none",
      alignItems: "center",
    },

    track: {
      pos: "relative",
      w: "full",
      h: "2",
      flexGrow: "1",
      overflow: "hidden",
      rounded: "full",
      bg: "secondary",
    },

    range: {
      pos: "absolute",
      h: "full",
      bg: "primary",
    },

    thumb: {
      display: "block",
      w: "5",
      h: "5",
      rounded: "full",
      bg: "bg",
      borderWidth: "2px",
      borderColor: "primary",
      transition: "colors",
      _focusVisible: {
        outlineStyle: "auto",
        ringWidth: "2px",
        ringColor: "ring",
        ringOffset: "2px",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },
  },
});
