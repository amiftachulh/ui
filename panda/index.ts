import { definePreset } from "@pandacss/dev";
import { keyframes } from "./keyframes";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { utilities } from "./utilities";

const preset = definePreset({
  name: "web",
  presets: ["@pandacss/preset-panda"],
  globalCss: {
    html: {
      "--global-color-border": "colors.border",
      "--global-color-placeholder": "colors.zinc.500",
    },
    body: {
      bg: "bg",
      color: "fg",
    },
  },
  theme: {
    extend: {
      semanticTokens,
      keyframes,
    },
    recipes,
    slotRecipes,
  },
  utilities: {
    extend: utilities,
  },
  staticCss: {
    recipes: "*",
  },
});

export default preset;
