import { defineSlotRecipe } from "@pandacss/dev";

export const sliderSlotRecipe = defineSlotRecipe({
  className: "slider",
  slots: ["root", "track", "range", "thumb"],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      w: "full",
      touchAction: "none",
      userSelect: "none",
      _disabled: {
        opacity: "0.5",
      },
      _vertical: {
        h: "full",
        minH: "44",
        w: "auto",
        flexDir: "column",
      },
    },

    track: {
      bg: "muted",
      pos: "relative",
      flexGrow: "1",
      overflow: "hidden",
      rounded: "full",
      _horizontal: {
        h: "1.5",
        w: "full",
      },
      _vertical: {
        w: "1.5",
        h: "full",
      },
    },

    range: {
      bg: "primary",
      pos: "absolute",
      _horizontal: {
        h: "full",
      },
      _vertical: {
        w: "full",
      },
    },

    thumb: {
      bg: "bg",
      display: "block",
      w: "4",
      h: "4",
      flexShrink: "0",
      rounded: "full",
      borderWidth: "1px",
      borderColor: "primary",
      shadow: "sm",
      transition: "common",
      outlineColor: "transparent",
      _hover: {
        outlineWidth: "4px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      _focusVisible: {
        outlineWidth: "4px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
    },
  },
});
