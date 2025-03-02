import { type PropertyConfig } from "@pandacss/dev";

const baseTransform = {
  transform:
    "translate(var(--panda-translate-x, 0), var(--panda-translate-y, 0)) rotate(var(--panda-rotate, 0)) skewX(var(--panda-skew-x, 0)) skewY(var(--panda-skew-y, 0)) scaleX(var(--panda-scale-x, 1)) scaleY(var(--panda-scale-y, 1))",
};

export const transform: Record<string, PropertyConfig> = {
  tf: {
    className: "tf",
    values: { type: "boolean" },
    transform: (value: boolean) => (value ? baseTransform : {}),
  },
  tfTranslateX: {
    className: "tf_translate_x",
    values: "spacing",
    transform: (value: string) => ({
      "--panda-translate-x": value,
    }),
  },
  tfTranslateY: {
    className: "tf_translate_y",
    values: "spacing",
    transform: (value: string) => ({
      "--panda-translate-y": value,
    }),
  },
  tfTranslate: {
    className: "tf_translate",
    values: "spacing",
    transform: (value: string) => ({
      "--panda-translate-x": value,
      "--panda-translate-y": value,
    }),
  },
  tfRotate: {
    className: "tf_rotate",
    transform: (value: string) => ({
      "--panda-rotate": value,
    }),
  },
  tfScaleX: {
    className: "tf_scale_x",
    transform: (value: string) => ({
      "--panda-scale-x": value,
    }),
  },
  tfScaleY: {
    className: "tf_scale_y",
    transform: (value: string) => ({
      "--panda-scale-y": value,
    }),
  },
  tfScale: {
    className: "tf_scale",
    transform: (value: string) => ({
      "--panda-scale-x": value,
      "--panda-scale-y": value,
    }),
  },
  tfSkewX: {
    className: "tf_skew_x",
    transform: (value: string) => ({
      "--panda-skew-x": value,
    }),
  },
  tfSkewY: {
    className: "tf_skew_y",
    transform: (value: string) => ({
      "--panda-skew-y": value,
    }),
  },
};
