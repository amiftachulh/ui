import { type PropertyConfig } from "@pandacss/dev";

export const animation: Record<string, PropertyConfig> = {
  animateIn: {
    className: "animate_in",
    values: { type: "boolean" },
    transform: (value: boolean, { token }) => {
      if (!value) return {};

      return {
        animationName: "enter",
        animationDuration: token("durations.fast"),
        "--panda-enter-opacity": "initial",
        "--panda-enter-scale": "initial",
        "--panda-enter-rotate": "initial",
        "--panda-enter-translate-x": "initial",
        "--panda-enter-translate-y": "initial",
      };
    },
  },
  animateOut: {
    className: "animate_out",
    values: { type: "boolean" },
    transform: (value: boolean, { token }) => {
      if (!value) return {};

      return {
        animationName: "exit",
        animationDuration: token("durations.fast"),
        "--panda-enter-opacity": "initial",
        "--panda-enter-scale": "initial",
        "--panda-enter-rotate": "initial",
        "--panda-enter-translate-x": "initial",
        "--panda-enter-translate-y": "initial",
      };
    },
  },
  fadeIn: {
    className: "animate_fade_in",
    values: "opacity",
    transform: (value: number | string) => {
      return {
        "--panda-enter-opacity": value,
      };
    },
  },
  fadeOut: {
    className: "animate_fade_out",
    values: "opacity",
    transform: (value: number | string) => {
      return {
        "--panda-exit-opacity": value,
      };
    },
  },
  zoomIn: {
    className: "animate_zoom_in",
    transform: (value: number | string) => {
      return {
        "--panda-enter-scale": Number(value) / 100,
      };
    },
  },
  zoomOut: {
    className: "animate_zoom_out",
    transform: (value: number | string) => {
      return {
        "--panda-exit-scale": Number(value) / 100,
      };
    },
  },
  spinIn: {
    className: "animate_spin_in",
    transform: (value: number | string) => {
      return {
        "--panda-enter-rotate": value,
      };
    },
  },
  spinOut: {
    className: "animate_spin_out",
    transform: (value: number | string) => {
      return {
        "--panda-exit-rotate": value,
      };
    },
  },
  slideInFromTop: {
    className: "animate_slide_in_from_top",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-enter-translate-y": `calc(${value} * -1)`,
      };
    },
  },
  slideInFromBottom: {
    className: "animate_slide_in_from_bottom",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-enter-translate-y": value,
      };
    },
  },
  slideInFromLeft: {
    className: "animate_slide_in_from_left",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-enter-translate-x": `calc(${value} * -1)`,
      };
    },
  },
  slideInFromRight: {
    className: "animate_slide_in_from_right",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-enter-translate-x": value,
      };
    },
  },
  slideOutToTop: {
    className: "animate_slide_out_to_top",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-exit-translate-y": `calc(${value} * -1)`,
      };
    },
  },
  slideOutToBottom: {
    className: "animate_slide_out_to_bottom",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-exit-translate-y": value,
      };
    },
  },
  slideOutToLeft: {
    className: "animate_slide_out_to_left",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-exit-translate-x": `calc(${value} * -1)`,
      };
    },
  },
  slideOutToRight: {
    className: "animate_slide_out_to_right",
    values: "spacing",
    transform: (value: number | string) => {
      return {
        "--panda-exit-translate-x": value,
      };
    },
  },
};
