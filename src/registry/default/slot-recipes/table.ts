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
      h: "10",
      px: "2",
      textAlign: "left",
      verticalAlign: "middle",
      fontWeight: "medium",
      color: "fg",
      whiteSpace: "nowrap",
      "&:has([role=checkbox])": {
        pr: "0",
      },
      "& > [role=checkbox]": {
        transform: "translateY(-2px)",
      },
    },

    cell: {
      p: "2",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      "&:has([role=checkbox])": {
        pr: "0",
      },
      "& > [role=checkbox]": {
        transform: "translateY(-2px)",
      },
    },

    caption: {
      mt: "4",
      color: "muted.fg",
      textStyle: "sm",
    },
  },
});
