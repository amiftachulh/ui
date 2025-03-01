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
    transform(value) {
      return {
        position: "relative",
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": "0px",
        "--tw-ring-offset-color": "#fff",
        "--tw-ring-color": "rgba(59, 130, 246, 0.5)",
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(" +
          value +
          " + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      };
    },
  },
  focusRingColor: {
    className: "ring-clr",
    values: "colors",
    group: "Shadow",
    transform(value, { utils }) {
      const mix = utils.colorMix(value);
      if (mix.invalid) {
        return {
          "--tw-ring-color": value,
        };
      }
      return {
        "--tw-ring-color": mix.value,
      };
    },
  },
  focusRingOffset: {
    className: "ring-offset",
    values: ringWidth,
    group: "Shadow",
    transform(value) {
      return {
        "--tw-ring-offset-width": value,
      };
    },
  },
  focusRingOffsetColor: {
    className: "ring-offset-clr",
    values: "colors",
    group: "Shadow",
    transform(value, { utils }) {
      const mix = utils.colorMix(value);
      if (mix.invalid) {
        return {
          "--tw-ring-offset-color": value,
        };
      }
      return {
        "--tw-ring-offset-color": mix.value,
      };
    },
  },
  focusRingInset: {
    className: "ring-inset",
    group: "Shadow",
    transform() {
      return {
        "--tw-ring-inset": "inset",
      };
    },
  },
};
