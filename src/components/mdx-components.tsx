import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { css, cx } from "styled-system/css";
import { chip } from "styled-system/recipes";
import CodeBlock from "./code-block";
import ComponentPreview from "./component-preview";
import ComponentSource from "./component-source";
import { FileTree, FileTreeItem } from "./file-tree";
import PackageInstaller from "./package-installer";
import PropsTable from "./props-table";
import { Alert, AlertContent, AlertDescription, AlertIcon } from "./ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const alertIconMap = {
  info: LuInfo,
  success: LuCircleCheckBig,
  warning: LuTriangleAlert,
  danger: LuCircleX,
} as const;

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
        mb: "6",
        pb: "2",
        borderBottomWidth: "1px",
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
  a: ({ href, ...props }) => {
    const linkClass = css({
      color: "primary/90",
      textDecoration: "underline",
      fontWeight: "medium",
      _hover: {
        color: "primary",
      },
    });

    if (href.startsWith("/")) {
      return <Link href={href} className={linkClass} {...props} />;
    }

    return <a href={href} className={linkClass} {...props} target="_blank" />;
  },
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
  li: ({ children }) => <li className={css({ my: "1" })}>{children}</li>,
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
        chip({ variant: "secondary", size: "md" }),
        css({ px: "0.5", color: "secondary.fg", userSelect: "auto" })
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
  table: (props) => (
    <div className={css({ rounded: "md", borderWidth: "1px" })}>
      <Table {...props} />
    </div>
  ),
  thead: (props) => <TableHeader className={css({ bg: "muted" })} {...props} />,
  tbody: TableBody,
  tr: TableRow,
  th: (props) => <TableHead className={css({ color: "fg" })} {...props} />,
  td: TableCell,
  ComponentPreview,
  ComponentSource,
  PackageInstaller,
  CodeBlock,
  Step: ({ className, ...props }) => (
    <h3
      className={cx(
        className,
        css({
          mt: "8",
          mb: "4",
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
            bg: "primary",
            color: "primary.fg",
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
  FileTree,
  FileTreeItem,
  Alert: ({ variant, children }) => {
    const Icon = alertIconMap[variant as keyof typeof alertIconMap];

    return (
      <Alert variant={variant} className={css({ my: "4" })}>
        <AlertIcon>
          <Icon />
        </AlertIcon>
        <AlertContent>
          <AlertDescription>{children}</AlertDescription>
        </AlertContent>
      </Alert>
    );
  },
  PropsTable,
  InfoPopover: ({ children, content }) => (
    <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
      <span className={css({ textStyle: "sm" })}>{children}</span>
      <Popover>
        <PopoverTrigger className={cx("group", css({ cursor: "pointer" }))}>
          <LuInfo
            className={css({
              w: "4",
              h: "4",
              color: "zinc.800",
              transition: "colors",
              _dark: {
                color: "zinc.400",
              },
              _groupHover: {
                color: "fg",
              },
            })}
          />
        </PopoverTrigger>
        <PopoverContent className={css({ textStyle: "sm" })}>{content}</PopoverContent>
      </Popover>
    </div>
  ),
};

export default components;
