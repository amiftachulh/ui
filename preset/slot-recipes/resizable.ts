import { defineSlotRecipe } from "@pandacss/dev";

export const resizableSlotRecipe = defineSlotRecipe({
  className: "resizable",
  slots: ["panelGroup", "panel", "handle"],
  base: {
    panelGroup: {
      display: "flex",
      w: "full",
      h: "full",
      "&[data-panel-group-direction=vertical]": {
        flexDir: "column",
      },
    },

    handle: {
      pos: "relative",
      display: "flex",
      w: "1px",
      alignItems: "center",
      justifyContent: "center",
      bg: "border",
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "2px",
        outlineColor: "ring",
      },
      "&[data-panel-group-direction=vertical]": {
        w: "full",
        h: "1px",
        _after: {
          left: "0",
          h: "1",
          w: "full",
          transform: "translate(0%, -50%)",
        },
        "& > div": {
          transform: "rotate(90deg)",
        },
      },
    },
  },
});
