import { defineSlotRecipe } from "@pandacss/dev";

export const fileUploadSlotRecipe = defineSlotRecipe({
  className: "file-upload",
  slots: [
    "root",
    "dropzone",
    "trigger",
    "list",
    "item",
    "itemPreview",
    "itemMetadata",
    "itemProgress",
    "itemProgressCircular",
    "itemProgressFill",
    "itemDelete",
    "clear",
  ],
  base: {
    root: {
      pos: "relative",
      display: "flex",
      flexDir: "column",
      gap: "2",
    },

    dropzone: {
      pos: "relative",
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      p: "6",
      borderWidth: "2px",
      borderStyle: "dashed",
      rounded: "lg",
      outline: "none",
      transitionProperty: "background-color, border-color, outline-color",
      transitionDuration: "200ms",
      transitionTimingFunction: "ease-in-out",
      userSelect: "none",
      _hover: {
        bg: "accent/30",
      },
      _focusVisible: {
        borderColor: "ring/50",
      },
      "&[data-disabled]": {
        pointerEvents: "none",
      },
      "&[data-dragging]": {
        bg: "accent/30",
        borderColor: "primary/30",
      },
      "&[data-invalid]": {
        borderColor: "danger",
        outlineColor: "danger/20",
      },
    },

    trigger: {},

    list: {
      display: "flex",
      flexDir: "column",
      gap: "2",
      "&[data-state=active]": {
        animateIn: true,
        fadeIn: "0",
        slideInFromTop: "2",
      },
      "&[data-state=inactive]": {
        animateOut: true,
        fadeOut: "0",
        slideOutToTop: "2",
      },
      "&[data-orientation=horizontal]": {
        flexDir: "row",
        overflowX: "auto",
        p: "1.5",
      },
    },

    item: {
      pos: "relative",
      display: "flex",
      alignItems: "center",
      gap: "2.5",
      rounded: "md",
      borderWidth: "1px",
      p: "3",
    },

    itemPreview: {
      pos: "relative",
      display: "flex",
      w: "10",
      h: "10",
      flexShrink: "0",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      rounded: "md",
      borderWidth: "1px",
      bg: "accent/50",
      "& > svg": {
        w: "10",
        h: "10",
      },
    },

    itemMetadata: {
      display: "flex",
      minW: "0",
      flex: "1",
      flexDir: "column",
    },

    itemProgress: {
      pos: "relative",
      w: "full",
      h: "1.5",
      overflow: "hidden",
      rounded: "full",
      bg: "primary/20",
    },

    itemProgressCircular: {
      pos: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },

    itemProgressFill: {
      pos: "absolute",
      inset: "0",
      bg: "primary/50",
      transitionProperty: "clip-path",
      transitionDuration: "300ms",
      transitionTimingFunction: "linear",
    },

    itemDelete: {},

    clear: {},
  },
});
