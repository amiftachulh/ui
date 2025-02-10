import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { transformerNotationDiff } from "@shikijs/transformers";
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
    transformers: [
      transformerNotationDiff({
        matchAlgorithm: "v3",
      }),
    ],
  });

  return (
    <div
      className={cx(
        css({
          pos: "relative",
          "& .shiki span": {
            _dark: {
              color: "var(--shiki-dark)!",
            },
          },
        }),
        className
      )}
    >
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
