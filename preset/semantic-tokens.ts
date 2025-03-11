import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.950}" } },
    fg: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
    primary: {
      DEFAULT: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.100}" } },
      hover: { value: { base: "{colors.zinc.800}", _dark: "{colors.zinc.200}" } },
      fg: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.900}" } },
    },
    secondary: {
      DEFAULT: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.800}" } },
      hover: { value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.700}" } },
      fg: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
    },
    accent: {
      DEFAULT: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.800}" } },
      fg: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
    },
    muted: {
      DEFAULT: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.800}" } },
      fg: { value: { base: "{colors.zinc.500}", _dark: "{colors.zinc.400}" } },
    },
    danger: {
      DEFAULT: { value: { base: "{colors.red.500}", _dark: "{colors.red.600}" } },
      fg: { value: { base: "{colors.red.50}", _dark: "{colors.red.900}" } },
    },
    card: {
      DEFAULT: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.950}" } },
      fg: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
    },
    popover: {
      DEFAULT: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.950}" } },
      fg: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
    },
    border: { value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" } },
    input: { value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" } },
    ring: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
    chart: {
      1: { value: { base: "hsl(12 76% 61%)", _dark: "hsl(220 70% 50%)" } },
      2: { value: { base: "hsl(173 58% 39%)", _dark: "hsl(160 60% 45%)" } },
      3: { value: { base: "hsl(197 37% 24%)", _dark: "hsl(30 80% 55%)" } },
      4: { value: { base: "hsl(43 74% 66%)", _dark: "hsl(280 65% 60%)" } },
      5: { value: { base: "hsl(27 87% 67%)", _dark: "hsl(340 75% 55%)" } },
    },
    sidebar: {
      DEFAULT: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.900}" } },
      fg: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
      primary: {
        DEFAULT: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.100}" } },
        fg: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.900}" } },
      },
      accent: {
        DEFAULT: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.800}" } },
        fg: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
      },
      border: { value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" } },
      ring: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
    },
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
  },
});
