import { defineSlotRecipe } from "@pandacss/dev";

export const buttonGroupSlotRecipe = defineSlotRecipe({
  className: "button-group",
  slots: ["root", "separator", "text"],
  base: {
    root: {
      display: "flex",
      w: "fit",
      alignItems: "stretch",
      "& > *": {
        _focusVisible: {
          pos: "relative",
          zIndex: "10",
        },
      },
      "& > .select__trigger": {
        w: "fit",
        _lastOfType: {
          "&:has(select[aria-hidden=true]:last-child)": {
            roundedRight: "md",
          },
        },
      },
      "& > input": {
        flex: "1",
      },
      "&:has(> .button-group__root)": {
        gap: "2",
      },
      _horizontal: {
        "& > *:not(:first-child)": {
          roundedLeft: "0!",
          borderLeftWidth: "0!",
        },
        "& > *:not(:last-child)": {
          roundedRight: "0!",
        },
      },
      _vertical: {
        flexDir: "column",
        "& > *:not(:first-child)": {
          roundedTop: "0!",
          borderTopWidth: "0!",
        },
        "& > *:not(:last-child)": {
          roundedBottom: "0!",
        },
      },
    },

    text: {
      bg: "muted",
      display: "flex",
      alignItems: "center",
      gap: "2",
      rounded: "md",
      borderWidth: "1px",
      px: "4",
      textStyle: "sm",
      fontWeight: "medium",
      shadow: "xs",
      "& svg": {
        pointerEvents: "none",
        w: "4",
        h: "4",
      },
    },

    separator: {
      bg: "input",
      pos: "relative",
      m: "0!",
      alignSelf: "stretch",
      _vertical: {
        h: "auto",
      },
    },
  },
});
