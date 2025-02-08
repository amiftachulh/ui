import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: { value: { base: "{colors.zinc.50}", _dark: "{colors.zinc.950}" } },
      muted: { value: { base: "{colors.zinc.100}", _dark: "{colors.zinc.900}" } },
    },
    fg: {
      DEFAULT: { value: { base: "{colors.zinc.950}", _dark: "{colors.zinc.50}" } },
      muted: { value: { base: "{colors.zinc.500}", _dark: "{colors.zinc.400}" } },
    },
    border: { value: { base: "{colors.zinc.200}", _dark: "{colors.zinc.800}" } },
    ring: { value: { base: "{colors.blue.300}", _dark: "{colors.blue.700}" } },
    solid: {
      DEFAULT: { value: { base: "{colors.blue.500}", _dark: "{colors.blue.700}" } },
      hover: { value: { base: "{colors.blue.600}", _dark: "{colors.blue.600}" } },
      active: { value: { base: "{colors.blue.700}", _dark: "{colors.blue.500}" } },
      fg: { value: "{colors.white}" },
    },
    subtle: {
      DEFAULT: { value: { base: "{colors.blue.100}", _dark: "{colors.blue.950}" } },
      hover: { value: { base: "{colors.blue.200}", _dark: "{colors.blue.900}" } },
      active: { value: { base: "{colors.blue.300}", _dark: "{colors.blue.800}" } },
      fg: { value: { base: "{colors.blue.700}", _dark: "{colors.blue.200}" } },
    },
    info: {
      DEFAULT: { value: { base: "{colors.blue.500}", _dark: "{colors.blue.400}" } },
      fg: { value: "{colors.white}" },
    },
    success: {
      DEFAULT: { value: { base: "{colors.green.500}", _dark: "{colors.green.400}" } },
      fg: { value: "{colors.white}" },
    },
    warning: {
      DEFAULT: { value: { base: "{colors.orange.500}", _dark: "{colors.orange.400}" } },
      fg: { value: "{colors.white}" },
    },
    danger: {
      DEFAULT: { value: { base: "{colors.red.500}", _dark: "{colors.red.400}" } },
      fg: { value: "{colors.white}" },
    },
  },
});
