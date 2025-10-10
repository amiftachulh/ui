import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: { value: { base: "white", _dark: "#0a0a0a" } },
    fg: { value: { base: "#0a0a0a", _dark: "#fafafa" } },
    primary: {
      DEFAULT: { value: { base: "#171717", _dark: "#e5e5e5" } },
      fg: { value: { base: "#fafafa", _dark: "#171717" } },
    },
    secondary: {
      DEFAULT: { value: { base: "#f5f5f5", _dark: "#262626" } },
      fg: { value: { base: "#171717", _dark: "#fafafa" } },
    },
    accent: {
      DEFAULT: { value: { base: "#f5f5f5", _dark: "#262626" } },
      fg: { value: { base: "#171717", _dark: "#fafafa" } },
    },
    muted: {
      DEFAULT: { value: { base: "#f5f5f5", _dark: "#262626" } },
      fg: { value: { base: "#737373", _dark: "#a1a1a1" } },
    },
    danger: { value: { base: "#e7000b", _dark: "#ff6467" } },
    surface: {
      DEFAULT: { value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" } },
      fg: { value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.50}" } },
    },
    card: {
      DEFAULT: { value: { base: "white", _dark: "#171717" } },
      fg: { value: { base: "#0a0a0a", _dark: "#fafafa" } },
    },
    popover: {
      DEFAULT: { value: { base: "white", _dark: "#171717" } },
      fg: { value: { base: "#0a0a0a", _dark: "#fafafa" } },
    },
    border: { value: { base: "#e5e5e5", _dark: "rgba(255, 255, 255, 0.1)" } },
    input: { value: { base: "#e5e5e5", _dark: "rgba(255, 255, 255, 0.15)" } },
    ring: { value: { base: "#a1a1a1", _dark: "#737373" } },
    chart: {
      1: { value: { base: "#f54a00", _dark: "#1447e6" } },
      2: { value: { base: "#009689", _dark: "#00bc7d" } },
      3: { value: { base: "#104e64", _dark: "#fd9a00" } },
      4: { value: { base: "#ffba00", _dark: "#ad46ff" } },
      5: { value: { base: "#fd9a00", _dark: "#ff2056" } },
    },
    sidebar: {
      DEFAULT: { value: { base: "#fafafa", _dark: "#171717" } },
      fg: { value: { base: "#0a0a0a", _dark: "#fafafa" } },
      primary: {
        DEFAULT: { value: { base: "#171717", _dark: "#1447e6" } },
        fg: { value: { base: "#fafafa", _dark: "#fafafa" } },
      },
      accent: {
        DEFAULT: { value: { base: "#f5f5f5", _dark: "#262626" } },
        fg: { value: { base: "#171717", _dark: "#fafafa" } },
      },
      border: { value: { base: "#e5e5e5", _dark: "rgba(255, 255, 255, 0.1)" } },
      ring: { value: { base: "#a1a1a1", _dark: "#737373" } },
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
