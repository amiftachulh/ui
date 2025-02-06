import { defineConfig } from "@pandacss/dev";
import preset from "./preset";

export default defineConfig({
  preflight: true,
  presets: [preset],
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  globalCss: {
    extend: {
      html: {
        "--global-font-body": "var(--font-geist-sans)",
        "--global-font-mono": "var(--font-geist-mono)",
        scrollBehavior: "smooth",
        scrollPaddingTop: "20",
        "&.dark .shiki, &.dark .shiki span": {
          color: "var(--shiki-dark) !important",
        },
        _scrollbar: {
          w: "1.5",
          h: "1.5",
        },
        _scrollbarThumb: {
          bg: "neutral.5",
          rounded: "full",
        },
        _scrollbarTrack: {
          bg: "transparent",
        },
      },
    },
  },
  outdir: "styled-system",
});
