import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { badge } from "styled-system/recipes";
import { Alert, AlertContent, AlertDescription, AlertIcon } from "@/registry/default/ui/alert";
import { Kbd } from "@/registry/default/ui/kbd";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import BlockPreview from "./block-preview";
import CodeBlock from "./code-block";
import { InstallationTabs } from "./code-tabs";
import ComponentPreview from "./component-preview";
import ComponentSource from "./component-source";
import { FileTree } from "./file-tree";
import PackageInstaller from "./package-installer";
import PackageRunner from "./package-runner";
import PropsTable from "./props-table";

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
  p: ({ children }) => <styled.p css={{ my: "4", lineHeight: "relaxed" }}>{children}</styled.p>,
  a: ({ href, ...props }) => {
    const linkClass = css({
      color: "primary/90",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
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
    <styled.strong css={{ color: "fg", fontWeight: "semibold" }}>{children}</styled.strong>
  ),
  ul: ({ children }) => (
    <styled.ul css={{ listStyleType: "disc", my: "4", pl: "6" }}>{children}</styled.ul>
  ),
  ol: ({ children }) => (
    <styled.ol css={{ listStyleType: "decimal", my: "4", pl: "6" }}>{children}</styled.ol>
  ),
  li: ({ children }) => <styled.li css={{ my: "1" }}>{children}</styled.li>,
  pre: (props) => {
    const { children, highlight, add, remove } = props;
    const code = children.props;
    const lang = code.className?.replace("language-", "");

    return (
      <CodeBlock
        className={css({ my: "4", borderWidth: "1", rounded: "md", overflow: "hidden" })}
        lang={lang}
        highlight={highlight}
        add={add}
        remove={remove}
      >
        {children.props.children}
      </CodeBlock>
    );
  },
  code: ({ children }) => (
    <styled.code
      className={badge({ variant: "secondary", size: "sm" })}
      css={{
        px: "0.5",
        rounded: "sm",
        color: "secondary.fg",
        userSelect: "auto",
        fontSize: "0.8rem",
        fontWeight: "normal",
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
    <styled.div css={{ my: "4", rounded: "md", borderWidth: "1px" }}>
      <Table css={{ overflow: "hidden" }} {...props} />
    </styled.div>
  ),
  thead: (props) => <TableHeader {...props} />,
  tbody: TableBody,
  tr: TableRow,
  th: (props) => <TableHead css={{ color: "fg" }} {...props} />,
  td: TableCell,
  Image: ({ className: _, ...props }: React.ComponentProps<typeof Image>) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={css({
        borderWidth: "1px",
        rounded: "md",
        overflow: "hidden",
        my: "4",
        w: "full",
      })}
      {...props}
    />
  ),
  ComponentPreview,
  ComponentSource,
  BlockPreview,
  PackageInstaller,
  PackageRunner,
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
  Alert: ({ variant, description }) => {
    const Icon = alertIconMap[variant as keyof typeof alertIconMap];

    return (
      <Alert variant={variant} css={{ my: "4" }}>
        <AlertIcon>
          <Icon />
        </AlertIcon>
        <AlertContent>
          <AlertDescription>{description}</AlertDescription>
        </AlertContent>
      </Alert>
    );
  },
  Callout: ({ children }) => (
    <styled.div
      css={{
        bg: { base: "zinc.100", _dark: "zinc.900" },
        p: "4",
        borderWidth: "1px",
        rounded: "md",
        "& *": {
          textStyle: "sm",
          "&:first-child": { mt: "0" },
          "&:last-child": { mb: "0" },
        },
      }}
    >
      {children}
    </styled.div>
  ),
  PropsTable,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  InstallationTabs,
  Kbd,
};

export default components;
