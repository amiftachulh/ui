import { defineSlotRecipe } from "@pandacss/dev";

export const tabsSlotRecipe = defineSlotRecipe({
  className: "tabs",
  slots: ["root", "list", "trigger", "content"],
  base: {
    root: {
      _vertical: {
        display: "flex",
      },
    },

    list: {
      overflowX: "auto",
      display: "inline-flex",
      color: "fg",
      _horizontal: {
        w: "full",
        borderBottomWidth: "1px",
      },
      _vertical: {
        flexDirection: "column",
        borderRightWidth: "1px",
      },
    },

    trigger: {
      display: "inline-flex",
      whiteSpace: "nowrap",
      px: "3",
      py: "1.5",
      textStyle: "sm",
      fontWeight: "medium",
      cursor: "pointer",
      _focusVisible: {
        outline: "none",
        focusRing: "2",
        focusRingColor: "ring",
        focusRingOffset: "2",
        focusRingOffsetColor: "bg",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: 0.5,
      },
      _horizontal: {
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: "2px",
        borderBottomColor: "transparent",
        "&[data-state=active]": {
          borderBottomColor: "primary",
        },
      },
      _vertical: {
        borderRightWidth: "2px",
        borderRightColor: "transparent",
        "&[data-state=active]": {
          borderRightColor: "primary",
        },
      },
    },

    content: {
      p: 2,
      _focusVisible: {
        outline: "none",
        focusRing: "2",
        focusRingColor: "ring",
        focusRingOffset: "2",
        focusRingOffsetColor: "bg",
      },
      _vertical: {
        flex: "1",
      },
    },
  },
});
