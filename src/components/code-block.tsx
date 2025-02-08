import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast, type BundledLanguage } from "shiki";
import { css, cx } from "styled-system/css";
import { scroll } from "styled-system/recipes";
import CodeBlockCopy from "./code-block-copy";

type CodeBlockProps = {
  lang: BundledLanguage;
  children: string;
  className?: string;
};

export default async function CodeBlock({ lang, children, className }: CodeBlockProps) {
  const out = await codeToHast(children, {
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
                  bg: "bg.muted",
                  p: "4",
                  textStyle: "sm",
                }),
                scroll()
              )}
              {...props}
            />
          ),
        },
      })}
      <CodeBlockCopy code={children} />
    </div>
  );
}
