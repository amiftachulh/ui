import { defineSlotRecipe } from "@pandacss/dev";

export const accordionSlotRecipe = defineSlotRecipe({
  className: "accordion",
  slots: ["root", "header", "trigger", "item", "content"],
  base: {
    item: {
      borderBottomWidth: "1px",
      _last: {
        borderBottomWidth: "0",
      },
    },

    header: {
      display: "flex",
    },

    trigger: {
      display: "flex",
      flex: "1",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "4",
      py: "4",
      textAlign: "left",
      textStyle: "sm",
      fontWeight: "medium",
      transition: "all",
      rounded: "md",
      outlineColor: "transparent",
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },
      _hover: {
        textDecoration: "underline",
      },
      _focusVisible: {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
    },

    content: {
      overflow: "hidden",
      textStyle: "sm",
      _open: {
        animation: "accordion-down",
      },
      _closed: {
        animation: "accordion-up",
      },
    },
  },
});
