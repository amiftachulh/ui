import { defineConfig } from "@pandacss/dev";
import preset from "./panda";

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
      },
    },
  },
  outdir: "styled-system",
});
