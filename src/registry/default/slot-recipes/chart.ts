import { defineSlotRecipe } from "@pandacss/dev";

export const chartSlotRecipe = defineSlotRecipe({
  className: "chart",
  slots: ["container", "tooltipLabel", "tooltipContent", "legendContent"],
  base: {
    container: {
      "& .recharts-cartesian-axis-tick text": {
        fill: "muted.fg",
      },
      "& .recharts-cartesian-grid line[stroke='#ccc']": {
        stroke: "border/50",
      },
      "& .recharts-curve.recharts-tooltip-cursor": {
        stroke: "border",
      },
      "& .recharts-polar-grid [stroke='#ccc']": {
        stroke: "border",
      },
      "& .recharts-radial-bar-background-sector": {
        fill: "muted",
      },
      "& .recharts-rectangle.recharts-tooltip-cursor": {
        fill: "muted/50",
      },
      "& .recharts-reference-line [stroke='#ccc']": {
        stroke: "border",
      },
      display: "flex",
      aspectRatio: "16 / 9",
      justifyContent: "center",
      textStyle: "xs",
      "& .recharts-dot[stroke='#fff']": {
        stroke: "transparent",
      },
      "& .recharts-layer": {
        outline: "none",
      },
      "& .recharts-sector": {
        outline: "none",
      },
      "& .recharts-sector[stroke='#fff']": {
        stroke: "transparent",
      },
      "& .recharts-surface": {
        outline: "none",
      },
    },

    tooltipLabel: {
      fontWeight: "medium",
    },

    tooltipContent: {
      borderColor: "border/50",
      bg: "bg",
      display: "grid",
      minW: "8rem",
      alignItems: "start",
      gap: "1.5",
      rounded: "lg",
      borderWidth: "1px",
      px: "2.5",
      py: "1.5",
      textStyle: "xs",
      shadow: "xl",
    },

    legendContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4",
      pt: "3",
      "&[data-vertical-align=top]": {
        pb: "3",
      },
    },
  },
});
