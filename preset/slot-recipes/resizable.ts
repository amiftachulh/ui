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
      alignItems: "center",
      justifyContent: "center",
      w: "1px",
      bg: "border",
      outline: "none",
      _focusVisible: {
        outlineStyle: "solid",
        outlineWidth: "1px",
        outlineOffset: "1px",
        outlineColor: "ring",
      },
      _after: {
        pos: "absolute",
        insetY: "0",
        left: "50%",
        w: "1",
        transform: "translateX(-50%)",
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
