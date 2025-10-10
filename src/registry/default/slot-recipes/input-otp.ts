import { defineSlotRecipe } from "@pandacss/dev";

export const inputOtpSlotRecipe = defineSlotRecipe({
  className: "input-otp",
  slots: ["container", "root", "group", "slot", "separator"],
  base: {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      "&:has(:disabled)": {
        opacity: "0.5",
      },
    },

    root: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      "&:has(:disabled)": {
        opacity: "0.5",
      },
    },

    separator: {
      _disabled: {
        cursor: "not-allowed",
      },
    },

    group: {
      display: "flex",
      alignItems: "center",
    },

    slot: {
      pos: "relative",
      display: "flex",
      w: "9",
      h: "9",
      alignItems: "center",
      justifyContent: "center",
      borderBlockWidth: "1px",
      borderRightWidth: "1px",
      borderColor: "input",
      textStyle: "sm",
      shadow: "xs",
      transition: "all",
      outlineColor: "transparent",
      "&[data-active=true]": {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
        zIndex: "10",
        "&[aria-invalid=true]": {
          borderColor: "danger",
          outlineColor: "danger/20",
          _dark: {
            outlineColor: "danger/40",
          },
        },
      },
      _first: {
        borderLeftWidth: "1px",
        roundedLeft: "md",
      },
      _last: {
        roundedRight: "md",
      },
      _dark: {
        bg: "input/30",
      },
    },
  },
});
