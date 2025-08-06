import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "{colors.white}", _dark: "{colors.neutral.950}" } },
    fg: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
    primary: {
      DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.100}" } },
      fg: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
    },
    secondary: {
      DEFAULT: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      fg: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" } },
    },
    accent: {
      DEFAULT: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      fg: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" } },
    },
    muted: {
      DEFAULT: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
      fg: { value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" } },
    },
    danger: {
      DEFAULT: { value: { base: "{colors.red.500}", _dark: "{colors.red.400}" } },
      fg: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
    },
    card: {
      DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },
      fg: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
    },
    popover: {
      DEFAULT: { value: { base: "{colors.white}", _dark: "{colors.neutral.900}" } },
      fg: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
    },
    border: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.800}" } },
    input: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.800}" } },
    ring: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" } },
    chart: {
      1: { value: { base: "{colors.orange.500}", _dark: "{colors.blue.400}" } },
      2: { value: { base: "{colors.cyan.500}", _dark: "{colors.green.400}" } },
      3: { value: { base: "{colors.blue.700}", _dark: "{colors.yellow.400}" } },
      4: { value: { base: "{colors.yellow.400}", _dark: "{colors.purple.400}" } },
      5: { value: { base: "{colors.yellow.500}", _dark: "{colors.red.400}" } },
    },
    sidebar: {
      DEFAULT: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
      fg: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
      primary: {
        DEFAULT: { value: { base: "{colors.neutral.900}", _dark: "{colors.blue.400}" } },
        fg: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.50}" } },
      },
      accent: {
        DEFAULT: { value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" } },
        fg: { value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" } },
      },
      border: { value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.800}" } },
      ring: { value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" } },
    },
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
  },
});
