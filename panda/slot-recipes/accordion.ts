import { defineSlotRecipe } from "@pandacss/dev";

export const accordionSlotRecipe = defineSlotRecipe({
  className: "accordion",
  slots: ["root", "header", "trigger", "item", "content"],
  base: {
    item: {
      borderBottomWidth: "1",
    },

    header: {
      display: "flex",
    },

    trigger: {
      display: "flex",
      flex: "1",
      alignItems: "center",
      justifyContent: "space-between",
      py: "4",
      fontWeight: "medium",
      transition: "all",
      cursor: "pointer",
      _hover: {
        textDecoration: "underline",
      },
      _open: {
        "& > svg": {
          transform: "rotate(180deg)",
        },
      },
    },

    content: {
      overflow: "hidden",
      textStyle: "sm",
      transition: "all",
      _open: {
        animation: "accordion-down",
      },
      _closed: {
        animation: "accordion-up",
      },
    },
  },
});
