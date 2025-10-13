import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: "var(--bg)" },
    fg: { value: "var(--fg)" },
    primary: {
      DEFAULT: { value: "var(--primary)" },
      fg: { value: "var(--primary-fg)" },
    },
    secondary: {
      DEFAULT: { value: "var(--secondary)" },
      fg: { value: "var(--secondary-fg)" },
    },
    accent: {
      DEFAULT: { value: "var(--accent)" },
      fg: { value: "var(--accent-fg)" },
    },
    muted: {
      DEFAULT: { value: "var(--muted)" },
      fg: { value: "var(--muted-fg)" },
    },
    danger: { value: "var(--danger)" },
    surface: {
      DEFAULT: { value: "var(--surface)" },
      fg: { value: "var(--surface-fg)" },
    },
    card: {
      DEFAULT: { value: "var(--card)" },
      fg: { value: "var(--card-fg)" },
    },
    popover: {
      DEFAULT: { value: "var(--popover)" },
      fg: { value: "var(--popover-fg)" },
    },
    border: { value: "var(--border)" },
    input: { value: "var(--input)" },
    ring: { value: "var(--ring)" },
    chart: {
      1: { value: "var(--chart-1)" },
      2: { value: "var(--chart-2)" },
      3: { value: "var(--chart-3)" },
      4: { value: "var(--chart-4)" },
      5: { value: "var(--chart-5)" },
    },
    sidebar: {
      DEFAULT: { value: "var(--sidebar)" },
      fg: { value: "var(--sidebar-fg)" },
      primary: {
        DEFAULT: { value: "var(--sidebar-primary)" },
        fg: { value: "var(--sidebar-primary-fg)" },
      },
      accent: {
        DEFAULT: { value: "var(--sidebar-accent)" },
        fg: { value: "var(--sidebar-accent-fg)" },
      },
      border: { value: "var(--sidebar-border)" },
      ring: { value: "var(--sidebar-ring)" },
    },
  },
  animations: {
    "accordion-up": { value: "accordion-up {durations.normal} {easings.out}" },
    "accordion-down": { value: "accordion-down {durations.normal} {easings.out}" },
    "accordion-left": { value: "accordion-left {durations.normal} {easings.out}" },
    "accordion-right": { value: "accordion-right {durations.normal} {easings.out}" },
    "caret-blink": { value: "caret-blink 1s ease-out infinite" },
  },
});
