import { defineSlotRecipe } from "@pandacss/dev";

export const inputGroupSlotRecipes = defineSlotRecipe({
  className: "input-group",
  slots: ["root", "addon", "text"],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      w: "full",
      minW: "0",
      h: "9",
      borderWidth: "1px",
      borderColor: "input",
      rounded: "md",
      shadow: "xs",
      outlineColor: "transparent",
      transition: "common",
      _dark: {
        bg: "input/30",
      },
      "&:has(> textarea)": {
        h: "auto",
      },
      "&:has(> [data-align=inline-start]) > input": {
        pl: "2",
      },
      "&:has(> [data-align=inline-end]) > input": {
        pr: "2",
      },
      "&:has(> [data-align=block-start])": {
        h: "auto",
        flexDir: "column",
        "& > input": {
          pb: "3",
        },
      },
      "&:has(> [data-align=block-end])": {
        h: "auto",
        flexDir: "column",
        "& > input": {
          pt: "3",
        },
      },
      "&:has([data-slot=input-group-control]:focus-visible)": {
        borderColor: "ring",
        outlineWidth: "3px",
        outlineStyle: "solid",
        outlineColor: "ring/50",
      },
      "&:has([data-slot][aria-invalid=true])": {
        borderColor: "danger",
        outlineColor: "danger/20",
        _dark: {
          outlineColor: "danger/40",
        },
      },
    },

    addon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      h: "auto",
      py: "1.5",
      color: "muted.fg",
      textStyle: "sm",
      fontWeight: "medium",
      cursor: "text",
      userSelect: "none",
      "& > svg": {
        w: "4",
        h: "4",
      },
      ".input-group__root[data-disabled=true] &": {
        opacity: "0.5",
      },
      "&[data-align=inline-start]": {
        order: "-9999",
        pl: "3",
        "&:has(> button)": {
          ml: "-0.45rem",
        },
        "&:has(> kbd)": {
          ml: "-0.35rem",
        },
      },
      "&[data-align=inline-end]": {
        order: "9999",
        pr: "3",
        "&:has(> button)": {
          mr: "-0.45rem",
        },
        "&:has(> kbd)": {
          mr: "-0.35rem",
        },
      },
      "&[data-align=block-start]": {
        order: "-9999",
        w: "full",
        justifyContent: "flex-start",
        p: "3",
        ".input-group__root:has(> input)": {
          pt: "2.5",
        },
      },
      "&[data-align=block-end]": {
        order: "9999",
        w: "full",
        justifyContent: "flex-start",
        p: "3",
        ".input-group__root:has(> input)": {
          pb: "2.5",
        },
      },
    },

    text: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      color: "muted.fg",
      textStyle: "sm",
      "& svg": {
        pointerEvents: "none",
        w: "4",
        h: "4",
      },
    },
  },
});
