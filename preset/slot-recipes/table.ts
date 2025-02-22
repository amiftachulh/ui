import { defineSlotRecipe } from "@pandacss/dev";

export const tableSlotRecipe = defineSlotRecipe({
  className: "table",
  slots: ["root", "header", "body", "footer", "row", "head", "cell", "caption"],
  base: {
    root: {
      w: "full",
      captionSide: "bottom",
      textStyle: "sm",
    },

    header: {
      "& tr": {
        borderBottomWidth: "1px",
      },
    },

    body: {
      "& tr:last-child": {
        borderWidth: "0",
      },
    },

    footer: {
      borderTop: "1px",
      bg: "muted/50",
      fontWeight: "medium",
      "& > tr:last-child": {
        borderBottomWidth: "0",
      },
    },

    row: {
      borderBottomWidth: "1px",
      transition: "colors",
      _hover: {
        bg: "muted/50",
      },
      _selected: {
        bg: "muted",
      },
    },

    head: {
      h: "12",
      px: "4",
      textAlign: "left",
      verticalAlign: "middle",
      fontWeight: "medium",
      color: "muted.fg",
      "&:has([role=checkbox])": {
        pr: "0",
      },
    },

    cell: {
      p: "4",
      verticalAlign: "middle",
      "&:has([role=checkbox])": {
        pr: "0",
      },
    },

    caption: {
      mt: "4",
      textStyle: "sm",
      color: "muted.fg",
    },
  },
});
