import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "oklch(1 0 0)", _dark: "oklch(0.145 0 0)" } },
    fg: { value: { base: "oklch(0.145 0 0)", _dark: "oklch(0.985 0 0)" } },
    primary: {
      DEFAULT: { value: { base: "oklch(0.205 0 0)", _dark: "oklch(0.922 0 0)" } },
      fg: { value: { base: "oklch(0.985 0 0)", _dark: "oklch(0.205 0 0)" } },
    },
    secondary: {
      DEFAULT: { value: { base: "oklch(0.97 0 0)", _dark: "oklch(0.269 0 0)" } },
      fg: { value: { base: "oklch(0.205 0 0)", _dark: "oklch(0.985 0 0)" } },
    },
    accent: {
      DEFAULT: { value: { base: "oklch(0.97 0 0)", _dark: "oklch(0.269 0 0)" } },
      fg: { value: { base: "oklch(0.205 0 0)", _dark: "oklch(0.985 0 0)" } },
    },
    muted: {
      DEFAULT: { value: { base: "oklch(0.97 0 0)", _dark: "oklch(0.269 0 0)" } },
      fg: { value: { base: "oklch(0.556 0 0)", _dark: "oklch(0.708 0 0)" } },
    },
    danger: {
      DEFAULT: { value: { base: "oklch(0.577 0.245 27.325)", _dark: "oklch(0.704 0.191 22.216)" } },
      fg: { value: { base: "oklch(0.985 0 0)", _dark: "oklch(0.205 0 0)" } },
    },
    card: {
      DEFAULT: { value: { base: "oklch(1 0 0)", _dark: "oklch(0.205 0 0)" } },
      fg: { value: { base: "oklch(0.145 0 0)", _dark: "oklch(0.985 0 0)" } },
    },
    popover: {
      DEFAULT: { value: { base: "oklch(1 0 0)", _dark: "oklch(0.205 0 0)" } },
      fg: { value: { base: "oklch(0.145 0 0)", _dark: "oklch(0.985 0 0)" } },
    },
    border: { value: { base: "oklch(0.922 0 0)", _dark: "oklch(1 0 0 / 10%)" } },
    input: { value: { base: "oklch(0.922 0 0)", _dark: "oklch(1 0 0 / 15%)" } },
    ring: { value: { base: "oklch(0.708 0 0)", _dark: "oklch(0.556 0 0)" } },
    chart: {
      1: { value: { base: "oklch(0.646 0.222 41.116)", _dark: "oklch(0.488 0.243 264.376)" } },
      2: { value: { base: "oklch(0.6 0.118 184.704)", _dark: "oklch(0.696 0.17 162.48)" } },
      3: { value: { base: "oklch(0.398 0.07 227.392)", _dark: "oklch(0.769 0.188 70.08)" } },
      4: { value: { base: "oklch(0.828 0.189 84.429)", _dark: "oklch(0.627 0.265 303.9)" } },
      5: { value: { base: "oklch(0.769 0.188 70.08)", _dark: "oklch(0.645 0.246 16.439)" } },
    },
    sidebar: {
      DEFAULT: { value: { base: "oklch(0.985 0 0)", _dark: "oklch(0.205 0 0)" } },
      fg: { value: { base: "oklch(0.145 0 0)", _dark: "oklch(0.985 0 0)" } },
      primary: {
        DEFAULT: { value: { base: "oklch(0.205 0 0)", _dark: "oklch(0.488 0.243 264.376)" } },
        fg: { value: { base: "oklch(0.985 0 0)", _dark: "oklch(0.985 0 0)" } },
      },
      accent: {
        DEFAULT: { value: { base: "oklch(0.97 0 0)", _dark: "oklch(0.269 0 0)" } },
        fg: { value: { base: "oklch(0.205 0 0)", _dark: "oklch(0.985 0 0)" } },
      },
      border: { value: { base: "oklch(0.922 0 0)", _dark: "oklch(1 0 0 / 10%)" } },
      ring: { value: { base: "oklch(0.708 0 0)", _dark: "oklch(0.556 0 0)" } },
    },
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
  },
});
