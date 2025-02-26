import { type PropertyConfig } from "@pandacss/dev";

const baseTransform = {
  transform:
    "translate(var(--panda-translate-x, 0), var(--panda-translate-y, 0)) rotate(var(--panda-rotate, 0)) skewX(var(--panda-skew-x, 0)) skewY(var(--panda-skew-y, 0)) scaleX(var(--panda-scale-x, 1)) scaleY(var(--panda-scale-y, 1))",
};

export const transform: Record<string, PropertyConfig> = {
  translate: {
    className: "translate",
    values: "spacing",
    transform: (value: string) => {
      return {
        ...baseTransform,
        "--panda-translate-x": value,
        "--panda-translate-y": value,
      };
    },
  },
  translateY: {
    className: "translate_y",
    values: "spacing",
    transform: (value: string) => {
      return {
        ...baseTransform,
        "--panda-translate-y": value,
      };
    },
  },
  translateX: {
    className: "translate_x",
    values: "spacing",
    transform: (value: string) => {
      return {
        ...baseTransform,
        "--panda-translate-x": value,
      };
    },
  },
};
