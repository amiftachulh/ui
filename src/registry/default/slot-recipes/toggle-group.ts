import { defineSlotRecipe } from "@pandacss/dev";

export const toggleGroupRecipe = defineSlotRecipe({
  className: "toggle-group",
  slots: ["root", "item"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      w: "fit",
      rounded: "md",
      "&[data-variant=outline]": {
        shadow: "xs",
      },
    },

    item: {
      minW: "0",
      flex: "1",
      flexShrink: "0",
      rounded: "0",
      shadow: "none",
      _first: {
        roundedLeft: "md",
      },
      _last: {
        roundedRight: "md",
      },
      _focus: {
        zIndex: "10",
      },
      _focusVisible: {
        zIndex: "10",
      },
      "&[data-variant=outline]": {
        borderLeftWidth: "0!",
        _first: {
          borderLeftWidth: "1px!",
        },
      },
    },
  },
});
