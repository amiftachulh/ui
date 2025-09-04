import { defineSlotRecipe } from "@pandacss/dev";

export const timelineSlotRecipe = defineSlotRecipe({
  className: "timeline",
  slots: ["root", "item", "separator", "dot", "connector", "content", "title", "description"],
  base: {
    root: {
      display: "flex",
      _vertical: {
        flexDir: "column",
      },
    },

    item: {
      display: "flex",
      gap: "4",
      _horizontal: {
        flexDir: "column",
      },
    },

    separator: {
      display: "flex",
      alignItems: "center",
      _vertical: {
        flexDir: "column",
      },
    },

    dot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: "4",
      h: "4",
      _vertical: {
        mt: "1",
      },
      _empty: {
        _after: {
          content: "''",
          display: "block",
          rounded: "full",
          outlineColor: "currentColor",
        },
      },
      "& svg": {
        w: "4",
        h: "4",
      },
      "&[data-variant=default]": {
        _empty: {
          _after: {
            w: "2.5",
            h: "2.5",
            bg: "current",
          },
        },
      },
      "&[data-variant=outline]": {
        _empty: {
          _after: {
            w: "2",
            h: "2",
            outlineStyle: "solid",
          },
        },
      },
    },

    connector: {
      bg: "border",
      flex: "1",
      _vertical: {
        my: "2",
        w: "0.5",
      },
      _horizontal: {
        mx: "2",
        h: "0.5",
      },
    },

    content: {
      flex: "1",
      _vertical: {
        pb: "7",
        _first: {
          textAlign: "right",
        },
        _last: {
          textAlign: "left",
        },
      },
      _horizontal: {
        pr: "7",
      },
    },

    description: {
      color: "muted.fg",
      fontSize: "0.8em",
    },
  },
});
