import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast, type BundledLanguage } from "shiki";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scroll } from "styled-system/recipes";
import CodeBlockCopy from "./code-block-copy";

type CodeBlockProps = {
  lang: BundledLanguage;
  children: string;
  className?: string;
  highlight?: string;
  add?: string;
  remove?: string;
};

export default async function CodeBlock({
  lang,
  children,
  className,
  highlight: h,
  add: a,
  remove: r,
}: CodeBlockProps) {
  const highlight = h ? parseLineNumbers(h) : [];
  const add = a ? parseLineNumbers(a) : [];
  const remove = r ? parseLineNumbers(r) : [];

  const out = await codeToHast(children, {
    lang,
    themes: {
      light: "light-plus",
      dark: "dark-plus",
    },
    transformers: [
      {
        line(node, line) {
          if (highlight.includes(line)) {
            this.addClassToHast(node, "highlighted");
          }

          if (add.includes(line)) {
            this.addClassToHast(node, "highlighted add");
          }

          if (remove.includes(line)) {
            this.addClassToHast(node, "highlighted remove");
          }

          return node;
        },
      },
    ],
  });

  return (
    <styled.div
      css={{
        pos: "relative",
        "& .shiki span": {
          _dark: {
            color: "var(--shiki-dark)!",
          },
        },
      }}
      className={className}
    >
      {toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
        components: {
          pre: ({ className, style: _, ...props }) => (
            <styled.pre
              css={{
                textStyle: "sm",
                maxH: "80",
                py: "4",
                bg: { base: "zinc.100", _dark: "zinc.900" },
                overflow: "auto",
                "& .line": {
                  pos: "relative",
                  px: "4",
                },
                "& .line:empty:last-child": {
                  display: "none",
                },
                "& .highlighted": {
                  display: "inline-block",
                  w: "full",
                  bg: { base: "zinc.200", _dark: "zinc.800" },
                  "&.add": {
                    bg: { base: "green.200/30", _dark: "green.900/30" },
                    "&::before": {
                      content: "'+'",
                      pos: "absolute",
                      left: "1",
                      color: "green.500",
                      fontSize: "md",
                      textAlign: "center",
                    },
                  },
                  "&.remove": {
                    bg: { base: "red.200/30", _dark: "red.900/30" },
                    "&::before": {
                      content: "'-'",
                      pos: "absolute",
                      left: "1",
                      color: "red.500",
                      fontSize: "md",
                      textAlign: "center",
                    },
                  },
                },
              }}
              className={cx(scroll(), className)}
              {...props}
            />
          ),
        },
      })}

      <CodeBlockCopy code={children} />
    </styled.div>
  );
}

/**
 * Parses a string of numbers and ranges (e.g., "1,2" or "1-3,5-7") into a sorted array.
 *
 * @param input Format: "1,2" or "1-3" or "1,3-5"
 * @returns Sorted array of numbers
 * @throws For invalid input format
 * @example parseLineNumbers("1,3-5") // returns [1, 3, 4, 5]
 */
function parseLineNumbers(input: string): number[] {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  const result = new Set<number>();

  const parts = input.split(",");

  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((num) => parseInt(num, 10));

      if (isNaN(start) || isNaN(end)) {
        throw new Error("Invalid range format");
      }

      for (let i = start; i <= end; i++) {
        result.add(i);
      }
    } else {
      const num = parseInt(part, 10);

      if (isNaN(num)) {
        throw new Error("Invalid number format");
      }

      result.add(num);
    }
  }

  return Array.from(result).sort((a, b) => a - b);
}
