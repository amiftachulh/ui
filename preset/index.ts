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
    },
    body: {
      bg: "bg",
      color: "fg",
    },
    button: {
      cursor: "pointer",
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
