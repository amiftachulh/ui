import { defineSlotRecipe } from "@pandacss/dev";

export const breadcrumbSlotRecipe = defineSlotRecipe({
  className: "breadcrumb",
  slots: ["root", "list", "item", "link", "page", "separator", "ellipsis"],
  base: {
    list: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "1.5",
      overflowWrap: "break-word",
      textStyle: "sm",
      color: "muted.fg",
      sm: {
        gap: "2.5",
      },
    },

    item: {
      display: "inline-flex",
      alignItems: "center",
      gap: "1.5",
    },

    link: {
      transition: "colors",
      _hover: {
        color: "fg",
      },
    },

    page: {
      fontWeight: "normal",
      color: "fg",
    },

    separator: {
      "& > svg": {
        w: "3.5",
        h: "3.5",
      },
    },

    ellipsis: {
      display: "flex",
      w: "9",
      h: "9",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
