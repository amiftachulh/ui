import { defineSlotRecipe } from "@pandacss/dev";

export const fieldSlotRecipe = defineSlotRecipe({
  className: "field",
  slots: [
    "set",
    "legend",
    "group",
    "root",
    "content",
    "label",
    "title",
    "description",
    "separator",
    "error",
  ],
  base: {
    set: {
      display: "flex",
      flexDir: "column",
      gap: "6",
      "&:has(> [data-slot=checkbox-group])": {
        gap: "3",
      },
      "&:has(> [data-slot=radio-group])": {
        gap: "3",
      },
    },

    legend: {
      mb: "3",
      fontWeight: "medium",
      "&[data-variant=legend]": {
        textStyle: "md",
      },
      "&[data-variant=label]": {
        textStyle: "sm",
      },
    },

    group: {
      containerName: "field-group",
      containerType: "inline-size",
      display: "flex",
      w: "full",
      flexDir: "column",
      gap: "7",
      "&[data-slot=checkbox-group]": {
        gap: "3",
      },
      "&[data-slot=field-group]": {
        gap: "4",
      },
    },

    root: {
      display: "flex",
      w: "full",
      gap: "3",
      "&[data-invalid=true]": {
        color: "danger",
      },
      "&[data-orientation=horizontal]": {
        flexDir: "row",
        alignItems: "center",
        "& > .field__label": {
          flex: "auto",
        },
        "&:has(> [data-slot=field-content])": {
          alignItems: "flex-start",
          "& > [role=checkbox], & > [role=radio]": {
            mt: "1px",
          },
        },
      },
      "&[data-orientation=vertical]": {
        flexDir: "column",
        "& > *": {
          w: "full",
        },
        "& > [data-visible=false]": {
          w: "auto",
        },
      },
      "&[data-orientation=responsive]": {
        flexDir: "column",
        "& > *": {
          w: "full",
        },
        "& > [data-visible=false]": {
          w: "auto",
        },
        "@container field-group (width >= 28rem)": {
          flexDir: "row",
          alignItems: "center",
          "& > *": {
            w: "auto",
          },
          "& > [data-slot=field-label]": {
            flex: "auto",
          },
          "&:has(> [data-slot=field-content])": {
            alignItems: "flex-start",
            "& > [role=checkbox], & > [role=radio]": {
              mt: "1px",
            },
          },
        },
      },
    },

    content: {
      display: "flex",
      flex: "1",
      flexDir: "column",
      gap: "1.5",
      lineHeight: "snug",
    },

    label: {},

    title: {
      display: "flex",
      w: "fit",
      alignItems: "center",
      gap: "2",
      textStyle: "sm",
      lineHeight: "snug",
      fontWeight: "medium",
      ".field__root[data-disabled=true] &": {
        opacity: "0.5",
      },
    },

    description: {
      color: "muted.fg",
      textStyle: "sm",
      lineHeight: "normal",
      fontWeight: "normal",
      ".field__root:has([data-orientation=horizontal]) &": {
        textWrap: "balance",
      },
      _last: {
        mt: "0",
      },
      "&:nth-last-child(2)": {
        mt: "-1",
      },
      "[data-variant=legend] + &": {
        mt: "-1.5",
      },
      "& > a": {
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        _hover: {
          color: "primary",
        },
      },
    },

    separator: {
      pos: "relative",
      my: "-2",
      h: "5",
      textStyle: "sm",
      ".field__group[data-variant=outline] &": {
        mb: "-2",
      },
    },

    error: {
      color: "danger",
      textStyle: "sm",
      fontWeight: "normal",
    },
  },
});
