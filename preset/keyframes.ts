import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  enter: {
    from: {
      opacity: "var(--panda-enter-opacity, 1)",
      transform:
        "translate3d(var(--panda-enter-translate-x, 0), var(--panda-enter-translate-y, 0), 0) scale3d(var(--panda-enter-scale, 1), var(--panda-enter-scale, 1), var(--panda-enter-scale, 1)) rotate(var(--panda-enter-rotate, 0))",
    },
  },
  exit: {
    to: {
      opacity: "var(--panda-exit-opacity, 1)",
      transform:
        "translate3d(var(--panda-exit-translate-x, 0), var(--panda-exit-translate-y, 0), 0) scale3d(var(--panda-exit-scale, 1), var(--panda-exit-scale, 1), var(--panda-exit-scale, 1)) rotate(var(--panda-exit-rotate, 0))",
    },
  },
  "accordion-down": {
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
  },
});
