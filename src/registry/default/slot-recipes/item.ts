import { defineSlotRecipe } from "@pandacss/dev";

export const itemSlotRecipes = defineSlotRecipe({
  className: "item",
  slots: [
    "group",
    "separator",
    "root",
    "media",
    "content",
    "title",
    "description",
    "actions",
    "header",
    "footer",
  ],
  base: {
    group: {
      display: "flex",
      flexDirection: "column",
    },

    separator: {},

    root: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      borderWidth: "1px",
      borderColor: "transparent",
      textStyle: "sm",
      rounded: "md",
      transition: "colors",
      outlineColor: "transparent",
      _focusVisible: {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      "&:is(a)": {
        transition: "colors",
        transitionDuration: "fast",
        _hover: {
          bg: "accent/50",
        },
      },
      "&[data-variant=default]": {
        bg: "transparent",
      },
      "&[data-variant=outline]": {
        borderColor: "border",
      },
      "&[data-variant=muted]": {
        bg: "muted/50",
      },
      "&[data-size=default]": {
        p: "4",
        gap: "4",
      },
      "&[data-size=sm]": {
        px: "4",
        py: "3",
        gap: "2.5",
      },
    },

    media: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      flexShrink: "0",
      ".item__root:has(.item__description) &": {
        alignSelf: "flex-start",
        transform: "translateY(0.125rem)",
      },
      "& svg": {
        pointerEvents: "none",
      },
      "&[data-variant=default]": {
        bg: "transparent",
      },
      "&[data-variant=icon]": {
        bg: "muted",
        w: "8",
        h: "8",
        borderWidth: "1px",
        rounded: "sm",
        "& svg": {
          w: "4",
          h: "4",
        },
      },
      "&[data-variant=image]": {
        w: "10",
        h: "10",
        rounded: "sm",
        overflow: "hidden",
        "& img": {
          w: "full",
          h: "full",
          objectFit: "cover",
        },
      },
    },

    content: {
      display: "flex",
      flex: "1",
      flexDir: "column",
      gap: "1",
      "& + .item__content": {
        flex: "none",
      },
    },

    title: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      w: "fit",
      textStyle: "sm",
      lineHeight: "snug",
      fontWeight: "medium",
    },

    description: {
      color: "muted.fg",
      lineClamp: "2",
      textStyle: "sm",
      lineHeight: "normal",
      fontWeight: "normal",
      textWrap: "balance",
      "& > a": {
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        _hover: {
          color: "primary",
        },
      },
    },

    actions: {
      display: "flex",
      alignItems: "center",
      gap: "2",
    },

    header: {
      display: "flex",
      flexBasis: "full",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
    },

    footer: {
      display: "flex",
      flexBasis: "full",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
    },
  },
});
