import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { css, cx } from "styled-system/css";
import { chip } from "styled-system/recipes";
import CodeBlock from "./code-block";
import ComponentPreview from "./component-preview";
import ComponentSource from "./component-source";
import PackageInstaller from "./package-installer";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={css({
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "3xl",
      })}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={css({
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "2xl",
        mt: "12",
      })}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={css({
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "xl",
        mt: "8",
      })}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      className={css({
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "lg",
        mt: "6",
      })}
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p
      className={css({
        my: "4",
        lineHeight: "relaxed",
      })}
    >
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <Link
      className={css({
        color: "primary/90",
        textDecoration: "underline",
        fontWeight: "medium",
        _hover: {
          color: "primary",
        },
      })}
      {...props}
    >
      {children}
    </Link>
  ),
  strong: ({ children }) => (
    <strong
      className={css({
        color: "fg",
        fontWeight: "semibold",
      })}
    >
      {children}
    </strong>
  ),
  ul: ({ children }) => (
    <ul
      className={css({
        listStyleType: "disc",
        my: "4",
        pl: "6",
      })}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      className={css({
        listStyleType: "decimal",
        my: "4",
        pl: "6",
      })}
    >
      {children}
    </ol>
  ),
  pre: (props) => {
    const {
      children: { props: code },
    } = props;
    const lang = code.className?.replace("language-", "");
    return (
      <CodeBlock
        className={css({ my: "4", borderWidth: "1", rounded: "md", overflow: "hidden" })}
        lang={lang}
      >
        {props.children.props.children}
      </CodeBlock>
    );
  },
  code: ({ children }) => (
    <code
      className={cx(
        chip({ variant: "subtle", size: "md" }),
        css({ px: "0.5", color: "subtle.fg", userSelect: "auto" })
      )}
    >
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote
      className={css({
        fontWeight: "medium",
        fontStyle: "italic",
        color: "fg",
        borderLeftWidth: "4px",
        borderLeftColor: "border",
        paddingLeft: "4",
        "& p": {
          marginTop: "4",
          marginBottom: "4",
        },
      })}
    >
      {children}
    </blockquote>
  ),
  ComponentPreview,
  ComponentSource,
  PackageInstaller,
  CodeBlock,
  Step: ({ className, ...props }) => (
    <h3
      className={cx(
        className,
        css({
          scrollMargin: "20",
          fontWeight: "medium",
          letterSpacing: "tight",
        })
      )}
      {...props}
    />
  ),
  Steps: ({ className, ...props }) => (
    <div
      className={cx(
        className,
        css({
          my: "4",
          ml: "4",
          pl: "8",
          borderLeftWidth: "1px",
          counterReset: "step",
          "& > h3": {
            counterIncrement: "step",
          },
          "& > h3::before": {
            pos: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "7",
            height: "7",
            rounded: "full",
            bg: "solid",
            color: "solid.fg",
            textAlign: "center",
            textIndent: "-1px",
            ml: "-47px",
            mt: "-2px",
            content: "counter(step)",
          },
        })
      )}
      {...props}
    />
  ),
};

export default components;
