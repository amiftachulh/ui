import { defineSlotRecipe } from "@pandacss/dev";

export const nativeSelectSlotRecipe = defineSlotRecipe({
  className: "native-select",
  slots: ["root", "option", "optGroup"],
  base: {
    root: {
      bg: "transparent",
      px: "3",
      py: "2",
      pr: "9",
      w: "full",
      h: "9",
      minW: "0",
      appearance: "none",
      borderWidth: "1px",
      borderColor: "input",
      rounded: "md",
      shadow: "xs",
      textStyle: "sm",
      transition: "common",
      outlineColor: "transparent",
      _placeholder: {
        color: "muted.fg",
      },
      _selection: {
        bg: "primary",
        color: "primary.fg",
      },
      _disabled: {
        pointerEvents: "none",
        cursor: "not-allowed",
      },
      _focusVisible: {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      "&[aria-invalid=true]": {
        borderColor: "danger!",
        outlineColor: "danger/20!",
        _dark: {
          outlineColor: "danger/40!",
        },
      },
      _dark: {
        bg: "input/30",
        _hover: {
          bg: "input/50",
        },
      },
    },
  },
});
