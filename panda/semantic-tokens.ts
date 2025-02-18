import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "hsl(0 0% 100%)", _dark: "hsl(240 10% 3.9%)" } },
    fg: { value: { base: "hsl(240 10% 3.9%)", _dark: "hsl(0 0% 98%)" } },
    primary: {
      DEFAULT: { value: { base: "hsl(240 5.9% 10%)", _dark: "hsl(0 0% 98%)" } },
      hover: { value: { base: "hsl(240 5.9% 15%)", _dark: "hsl(0 0% 90%)" } },
      fg: { value: { base: "hsl(0 0% 98%)", _dark: "hsl(240 5.9% 10%)" } },
    },
    secondary: {
      DEFAULT: { value: { base: "hsl(240 4.8% 95.9%)", _dark: "hsl(240 3.7% 15.9%)" } },
      hover: { value: { base: "hsl(240 4.8% 90%)", _dark: "hsl(240 3.7% 20%)" } },
      fg: { value: { base: "hsl(240 5.9% 10%)", _dark: "hsl(0 0% 98%)" } },
    },
    accent: {
      DEFAULT: { value: { base: "hsl(240 4.8% 95.9%)", _dark: "hsl(240 3.7% 15.9%)" } },
      fg: { value: { base: "hsl(240 5.9% 10%)", _dark: "hsl(0 0% 98%)" } },
    },
    muted: {
      DEFAULT: { value: { base: "hsl(240 4.8% 95.9%)", _dark: "hsl(240 3.7% 15.9%)" } },
      fg: { value: { base: "hsl(240 3.8% 46.1%)", _dark: "hsl(240 5% 64.9%)" } },
    },
    border: { value: { base: "hsl(240 5.9% 90%)", _dark: "hsl(240 3.7% 15.9%)" } },
    input: { value: { base: "hsl(240 5.9% 90%)", _dark: "hsl(240 3.7% 15.9%)" } },
    ring: { value: { base: "hsl(240 5.9% 10%)", _dark: "hsl(240 4.9% 83.9%)" } },
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
  },
});
