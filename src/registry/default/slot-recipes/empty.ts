import { defineSlotRecipe } from "@pandacss/dev";

export const emptySlotRecipe = defineSlotRecipe({
  className: "empty",
  slots: ["root", "header", "media", "title", "description", "content"],
  base: {
    root: {
      display: "flex",
      minW: "0",
      flex: "1",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "6",
      rounded: "lg",
      borderStyle: "dashed",
      p: "6",
      textAlign: "center",
      textWrap: "balance",
      md: {
        p: "12",
      },
    },

    header: {
      display: "flex",
      maxW: "sm",
      flexDir: "column",
      alignItems: "center",
      gap: "2",
      textAlign: "center",
    },

    media: {
      display: "flex",
      flexShrink: "0",
      alignItems: "center",
      justifyContent: "center",
      mb: "2",
      "& svg": {
        pointerEvents: "none",
        flexShrink: "0",
      },
      "&[data-variant=default]": {
        bg: "transparent",
      },
      "&[data-variant=icon]": {
        bg: "muted",
        color: "fg",
        display: "flex",
        w: "10",
        h: "10",
        flexShrink: "0",
        alignItems: "center",
        justifyContent: "center",
        rounded: "lg",
        "& svg": {
          w: "6",
          h: "6",
        },
      },
    },

    title: {
      textStyle: "lg",
      fontWeight: "medium",
      letterSpacing: "tight",
    },

    description: {
      color: "fg",
      textStyle: "sm",
      lineHeight: "relaxed",
      "& > a": {
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        _hover: {
          color: "primary",
        },
      },
    },

    content: {
      display: "flex",
      w: "full",
      minW: "0",
      maxW: "sm",
      flexDir: "column",
      alignItems: "center",
      gap: "4",
      textStyle: "sm",
      textWrap: "balance",
    },
  },
});
