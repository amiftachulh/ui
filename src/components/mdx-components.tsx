import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { chip } from "styled-system/recipes";
import CodeBlock from "./code-block";
import ComponentPreview from "./component-preview";
import ComponentSource from "./component-source";
import { FileTree, FileTreeItem } from "./file-tree";
import PackageInstaller from "./package-installer";
import PropsTable from "./props-table";
import { Alert } from "./ui/alert";
import { Popover } from "./ui/popover";
import { Table } from "./ui/table";

const alertIconMap = {
  info: LuInfo,
  success: LuCircleCheckBig,
  warning: LuTriangleAlert,
  danger: LuCircleX,
} as const;

const components: MDXComponents = {
  h1: ({ children }) => (
    <styled.h1
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      css={{
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "3xl",
      }}
    >
      {children}
    </styled.h1>
  ),
  h2: ({ children }) => (
    <styled.h2
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      css={{
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "2xl",
        mt: "12",
        mb: "6",
        pb: "2",
        borderBottomWidth: "1px",
      }}
    >
      {children}
    </styled.h2>
  ),
  h3: ({ children }) => (
    <styled.h3
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      css={{
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "xl",
        mt: "8",
      }}
    >
      {children}
    </styled.h3>
  ),
  h4: ({ children }) => (
    <styled.h4
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      css={{
        color: "fg",
        lineHeight: "tight",
        fontWeight: "semibold",
        fontSize: "lg",
        mt: "6",
      }}
    >
      {children}
    </styled.h4>
  ),
  p: ({ children }) => (
    <styled.p
      css={{
        my: "4",
        lineHeight: "relaxed",
      }}
    >
      {children}
    </styled.p>
  ),
  a: ({ href, ...props }) => {
    const linkClass = css({
      color: "primary/90",
      textDecoration: "underline",
      textUnderlineOffset: "1px",
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
    <styled.strong
      css={{
        color: "fg",
        fontWeight: "semibold",
      }}
    >
      {children}
    </styled.strong>
  ),
  ul: ({ children }) => (
    <styled.ul
      css={{
        listStyleType: "disc",
        my: "4",
        pl: "6",
      }}
    >
      {children}
    </styled.ul>
  ),
  ol: ({ children }) => (
    <styled.ol
      css={{
        listStyleType: "decimal",
        my: "4",
        pl: "6",
      }}
    >
      {children}
    </styled.ol>
  ),
  li: ({ children }) => <styled.li css={{ my: "1" }}>{children}</styled.li>,
  pre: (props) => {
    const { children, highlight, add } = props;
    const code = children.props;
    const lang = code.className?.replace("language-", "");

    return (
      <CodeBlock
        className={css({ my: "4", borderWidth: "1", rounded: "md", overflow: "hidden" })}
        lang={lang}
        highlight={highlight}
        add={add}
      >
        {children.props.children}
      </CodeBlock>
    );
  },
  code: ({ children }) => (
    <styled.code
      className={chip({ variant: "secondary", size: "md" })}
      css={{
        px: "0.5",
        color: "secondary.fg",
        userSelect: "auto",
      }}
    >
      {children}
    </styled.code>
  ),
  blockquote: ({ children }) => (
    <styled.blockquote
      css={{
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
      }}
    >
      {children}
    </styled.blockquote>
  ),
  table: (props) => (
    <styled.div css={{ rounded: "md", borderWidth: "1px" }}>
      <Table.Root {...props} />
    </styled.div>
  ),
  thead: (props) => <Table.Header className={css({ bg: "muted" })} {...props} />,
  tbody: Table.Body,
  tr: Table.Row,
  th: (props) => <Table.Head className={css({ color: "fg" })} {...props} />,
  td: Table.Cell,
  ComponentPreview,
  ComponentSource,
  PackageInstaller,
  CodeBlock,
  Step: (props) => (
    <styled.h3
      css={{
        mt: "8",
        mb: "4",
        scrollMargin: "20",
        fontWeight: "medium",
        letterSpacing: "tight",
      }}
      {...props}
    />
  ),
  Steps: (props) => (
    <styled.div
      css={{
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
      }}
      {...props}
    />
  ),
  FileTree,
  FileTreeItem,
  Alert: ({ variant, description }) => {
    const Icon = alertIconMap[variant as keyof typeof alertIconMap];

    return (
      <Alert.Root variant={variant} className={css({ my: "4" })}>
        <Alert.Icon>
          <Icon />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Description>{description}</Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );
  },
  PropsTable,
  InfoPopover: ({ children, content }) => (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
      <styled.span css={{ textStyle: "sm" }}>{children}</styled.span>
      <Popover.Root>
        <Popover.Trigger className="group" css={{ cursor: "pointer" }}>
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
        </Popover.Trigger>
        <Popover.Content css={{ textStyle: "sm" }}>{content}</Popover.Content>
      </Popover.Root>
    </styled.div>
  ),
};

export default components;
