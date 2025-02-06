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
        ringWidth: "2",
        ringColor: "ring",
        ringOffset: "0.5",
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
          borderBottomColor: "solid",
        },
      },
      _vertical: {
        borderRightWidth: "2px",
        borderRightColor: "transparent",
        "&[data-state=active]": {
          borderRightColor: "solid",
        },
      },
    },
    content: {
      p: 2,
      _focusVisible: {
        ringWidth: "1",
        ringColor: "ring",
        ringOffset: "0.5",
      },
      _vertical: {
        flex: "1",
      },
    },
  },
});
