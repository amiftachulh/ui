import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      DEFAULT: {
        value: { base: "{colors.gray.light.1}", _dark: "{colors.gray.dark.1}" },
      },
      subtle: {
        value: { base: "{colors.gray.light.2}", _dark: "{colors.gray.dark.2}" },
      },
    },
    fg: {
      DEFAULT: {
        value: { base: "{colors.gray.light.12}", _dark: "{colors.gray.dark.12}" },
      },
      subtle: {
        value: { base: "{colors.gray.light.11}", _dark: "{colors.gray.dark.11}" },
      },
    },
    border: {
      value: { base: "{colors.gray.light.6}", _dark: "{colors.gray.dark.6}" },
    },
    ring: {
      value: { base: "{colors.indigo.light.8}", _dark: "{colors.indigo.dark.8}" },
    },
    solid: {
      DEFAULT: {
        value: { base: "{colors.indigo.light.9}", _dark: "{colors.indigo.dark.9}" },
      },
      hover: {
        value: { base: "{colors.indigo.light.10}", _dark: "{colors.indigo.dark.10}" },
      },
      fg: { value: "{colors.white}" },
    },
    subtle: {
      DEFAULT: {
        value: { base: "{colors.indigo.light.3}", _dark: "{colors.indigo.dark.3}" },
      },
      hover: {
        value: { base: "{colors.indigo.light.4}", _dark: "{colors.indigo.dark.4}" },
      },
      active: {
        value: { base: "{colors.indigo.light.5}", _dark: "{colors.indigo.dark.5}" },
      },
      fg: {
        value: { base: "{colors.indigo.light.11}", _dark: "{colors.indigo.dark.11}" },
      },
    },
    info: {
      DEFAULT: {
        value: { base: "{colors.blue.light.3}", _dark: "{colors.blue.dark.3}" },
      },
      fg: {
        value: { base: "{colors.blue.light.11}", _dark: "{colors.blue.dark.11}" },
      },
    },
    success: {
      DEFAULT: {
        value: { base: "{colors.green.light.3}", _dark: "{colors.green.dark.3}" },
      },
      fg: {
        value: { base: "{colors.green.light.11}", _dark: "{colors.green.dark.11}" },
      },
    },
    warning: {
      DEFAULT: {
        value: { base: "{colors.amber.light.3}", _dark: "{colors.amber.dark.3}" },
      },
      fg: {
        value: { base: "{colors.amber.light.11}", _dark: "{colors.amber.dark.11}" },
      },
    },
    danger: {
      DEFAULT: {
        value: { base: "{colors.red.light.3}", _dark: "{colors.red.dark.3}" },
      },
      fg: {
        value: { base: "{colors.red.light.11}", _dark: "{colors.red.dark.11}" },
      },
    },
    accent: {
      1: { value: { _light: "{colors.indigo.light.1}", _dark: "{colors.indigo.dark.1}" } },
      2: { value: { _light: "{colors.indigo.light.2}", _dark: "{colors.indigo.dark.2}" } },
      3: { value: { _light: "{colors.indigo.light.3}", _dark: "{colors.indigo.dark.3}" } },
      4: { value: { _light: "{colors.indigo.light.4}", _dark: "{colors.indigo.dark.4}" } },
      5: { value: { _light: "{colors.indigo.light.5}", _dark: "{colors.indigo.dark.5}" } },
      6: { value: { _light: "{colors.indigo.light.6}", _dark: "{colors.indigo.dark.6}" } },
      7: { value: { _light: "{colors.indigo.light.7}", _dark: "{colors.indigo.dark.7}" } },
      8: { value: { _light: "{colors.indigo.light.8}", _dark: "{colors.indigo.dark.8}" } },
      9: { value: { _light: "{colors.indigo.light.9}", _dark: "{colors.indigo.dark.9}" } },
      10: { value: { _light: "{colors.indigo.light.10}", _dark: "{colors.indigo.dark.10}" } },
      11: { value: { _light: "{colors.indigo.light.11}", _dark: "{colors.indigo.dark.11}" } },
      12: { value: { _light: "{colors.indigo.light.12}", _dark: "{colors.indigo.dark.12}" } },
      a1: { value: { _light: "{colors.indigo.light.a1}", _dark: "{colors.indigo.dark.a1}" } },
      a2: { value: { _light: "{colors.indigo.light.a2}", _dark: "{colors.indigo.dark.a2}" } },
      a3: { value: { _light: "{colors.indigo.light.a3}", _dark: "{colors.indigo.dark.a3}" } },
      a4: { value: { _light: "{colors.indigo.light.a4}", _dark: "{colors.indigo.dark.a4}" } },
      a5: { value: { _light: "{colors.indigo.light.a5}", _dark: "{colors.indigo.dark.a5}" } },
      a6: { value: { _light: "{colors.indigo.light.a6}", _dark: "{colors.indigo.dark.a6}" } },
      a7: { value: { _light: "{colors.indigo.light.a7}", _dark: "{colors.indigo.dark.a7}" } },
      a8: { value: { _light: "{colors.indigo.light.a8}", _dark: "{colors.indigo.dark.a8}" } },
      a9: { value: { _light: "{colors.indigo.light.a9}", _dark: "{colors.indigo.dark.a9}" } },
      a10: { value: { _light: "{colors.indigo.light.a10}", _dark: "{colors.indigo.dark.a10}" } },
      a11: { value: { _light: "{colors.indigo.light.a11}", _dark: "{colors.indigo.dark.a11}" } },
      a12: { value: { _light: "{colors.indigo.light.a12}", _dark: "{colors.indigo.dark.a12}" } },
    },
    neutral: {
      1: { value: { _light: "{colors.gray.light.1}", _dark: "{colors.gray.dark.1}" } },
      2: { value: { _light: "{colors.gray.light.2}", _dark: "{colors.gray.dark.2}" } },
      3: { value: { _light: "{colors.gray.light.3}", _dark: "{colors.gray.dark.3}" } },
      4: { value: { _light: "{colors.gray.light.4}", _dark: "{colors.gray.dark.4}" } },
      5: { value: { _light: "{colors.gray.light.5}", _dark: "{colors.gray.dark.5}" } },
      6: { value: { _light: "{colors.gray.light.6}", _dark: "{colors.gray.dark.6}" } },
      7: { value: { _light: "{colors.gray.light.7}", _dark: "{colors.gray.dark.7}" } },
      8: { value: { _light: "{colors.gray.light.8}", _dark: "{colors.gray.dark.8}" } },
      9: { value: { _light: "{colors.gray.light.9}", _dark: "{colors.gray.dark.9}" } },
      10: { value: { _light: "{colors.gray.light.10}", _dark: "{colors.gray.dark.10}" } },
      11: { value: { _light: "{colors.gray.light.11}", _dark: "{colors.gray.dark.11}" } },
      12: { value: { _light: "{colors.gray.light.12}", _dark: "{colors.gray.dark.12}" } },
      a1: { value: { _light: "{colors.gray.light.a1}", _dark: "{colors.gray.dark.a1}" } },
      a2: { value: { _light: "{colors.gray.light.a2}", _dark: "{colors.gray.dark.a2}" } },
      a3: { value: { _light: "{colors.gray.light.a3}", _dark: "{colors.gray.dark.a3}" } },
      a4: { value: { _light: "{colors.gray.light.a4}", _dark: "{colors.gray.dark.a4}" } },
      a5: { value: { _light: "{colors.gray.light.a5}", _dark: "{colors.gray.dark.a5}" } },
      a6: { value: { _light: "{colors.gray.light.a6}", _dark: "{colors.gray.dark.a6}" } },
      a7: { value: { _light: "{colors.gray.light.a7}", _dark: "{colors.gray.dark.a7}" } },
      a8: { value: { _light: "{colors.gray.light.a8}", _dark: "{colors.gray.dark.a8}" } },
      a9: { value: { _light: "{colors.gray.light.a9}", _dark: "{colors.gray.dark.a9}" } },
      a10: { value: { _light: "{colors.gray.light.a10}", _dark: "{colors.gray.dark.a10}" } },
      a11: { value: { _light: "{colors.gray.light.a11}", _dark: "{colors.gray.dark.a11}" } },
      a12: { value: { _light: "{colors.gray.light.a12}", _dark: "{colors.gray.dark.a12}" } },
    },
  },
});
