import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { BundledLanguage } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";
import { css, cx } from "styled-system/css";
import CodeBlockCopy from "@/components/code-block-copy";

type HighlightArgs = {
  code: string;
  lang: BundledLanguage;
  className?: string;
};

export async function highlight({ code, lang, className }: HighlightArgs) {
  const out = await codeToHast(code, {
    lang,
    themes: {
      light: "light-plus",
      dark: "dark-plus",
    },
  });

  return (
    <div className={cx(className, css({ pos: "relative" }))}>
      {toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
        components: {
          pre: ({ className, style: _, ...props }) => (
            <pre
              className={cx(
                className,
                css({
                  maxH: "80",
                  overflow: "auto",
                  bg: "bg.subtle",
                  p: "4",
                  textStyle: "sm",
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
                  "&::-webkit-scrollbar-corner": {
                    bg: "transparent",
                  },
                })
              )}
              {...props}
            />
          ),
        },
      })}
      <CodeBlockCopy code={code} />
    </div>
  );
}
