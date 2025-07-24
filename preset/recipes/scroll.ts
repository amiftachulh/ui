import { defineRecipe } from "@pandacss/dev";

export const scrollRecipe = defineRecipe({
  className: "scroll",
  base: {
    _scrollbar: {
      w: "1.5",
      h: "1.5",
    },
    _scrollbarThumb: {
      bg: "zinc.300",
      rounded: "full",
      _dark: {
        bg: "zinc.700",
      },
    },
    _scrollbarTrack: {
      bg: "transparent",
    },
    "&::-webkit-scrollbar-corner": {
      bg: "transparent",
    },
  },
});
