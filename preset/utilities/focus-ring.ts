import { PropertyConfig } from "@pandacss/dev";

const ringWidth = {
  "0": "0px",
  "1": "1px",
  "2": "2px",
  "4": "4px",
  "8": "8px",
} as const;

export const focusRing: Record<string, PropertyConfig> = {
  focusRing: {
    className: "ring",
    values: ringWidth,
    group: "Shadow",
    transform(value, { token }) {
      return {
        "--panda-ring-inset": "var(--panda-empty,/*!*/ /*!*/)",
        "--panda-ring-offset-width": "0px",
        "--panda-ring-offset-color": "#fff",
        "--panda-ring-color": token("colors.primary"),
        "--panda-ring-offset-shadow":
          "var(--panda-ring-inset) 0 0 0 var(--panda-ring-offset-width) var(--panda-ring-offset-color)",
        "--panda-ring-shadow": `var(--panda-ring-inset) 0 0 0 calc(${value} + var(--panda-ring-offset-width)) var(--panda-ring-color)`,
        boxShadow: "var(--panda-ring-offset-shadow), var(--panda-ring-shadow)",
      };
    },
  },
  focusRingColor: {
    className: "ring-clr",
    values: "colors",
    group: "Shadow",
    transform(value, { utils }) {
      const mix = utils.colorMix(value);
      return {
        "--panda-ring-color": mix.invalid ? value : mix.value,
      };
    },
  },
  focusRingOffset: {
    className: "ring-offset",
    values: ringWidth,
    group: "Shadow",
    transform(value) {
      return {
        "--panda-ring-offset-width": value,
      };
    },
  },
  focusRingOffsetColor: {
    className: "ring-offset-clr",
    values: "colors",
    group: "Shadow",
    transform(value, { utils }) {
      const mix = utils.colorMix(value);
      return {
        "--panda-ring-offset-color": mix.invalid ? value : mix.value,
      };
    },
  },
  focusRingInset: {
    className: "ring-inset",
    group: "Shadow",
    transform() {
      return {
        "--panda-ring-inset": "inset",
      };
    },
  },
};
