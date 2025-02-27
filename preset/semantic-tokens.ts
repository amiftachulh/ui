import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.950}" } },
    fg: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
    primary: {
      DEFAULT: { value: { base: "{colors.zinc.900}", _dark: "{colors.zinc.50}" } },
      hover: { value: { base: "{colors.zinc.800}", _dark: "{colors.zinc.100}" } },
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
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
    "caret-blink": { value: "caret-blink 1.25s {easings.out} infinite" },
  },
});
