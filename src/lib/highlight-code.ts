import { codeToHtml } from "shiki";
import { css } from "styled-system/css";

export async function highlightCode(code: string, language: string = "tsx") {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      dark: "dark-plus",
      light: "light-plus",
    },
    transformers: [
      {
        pre(node) {
          node.properties["class"] = css({
            minW: "0",
            overflowX: "auto",
            px: "4",
            py: "3.5",
            outlineStyle: "none",
            bg: "transparent!",
            _scrollbar: { display: "none" },
            "&:has([data-highlighted-line])": { px: "0" },
            "&:has([data-line-numbers])": { px: "0" },
            "&:has(.tabs)": { p: "0" },
          });
          // "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0 !bg-transparent";
        },
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
        line(node) {
          node.properties["data-line"] = "";
        },
      },
    ],
  });

  return html;
}
