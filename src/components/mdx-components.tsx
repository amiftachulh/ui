import { LuCircleCheckBig, LuCircleX, LuInfo, LuTriangleAlert } from "react-icons/lu";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { chip } from "styled-system/recipes";
import CodeBlock from "./code-block";
import ComponentPreview from "./component-preview";
import ComponentSource from "./component-source";
import { FileTree } from "./file-tree";
import PackageInstaller from "./package-installer";
import PropsTable from "./props-table";
import { Alert, AlertContent, AlertDescription, AlertIcon } from "./ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

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
      color="fg"
      lineHeight="tight"
      fontWeight="semibold"
      fontSize="3xl"
    >
      {children}
    </styled.h1>
  ),
  h2: ({ children }) => (
    <styled.h2
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      color="fg"
      lineHeight="tight"
      fontWeight="semibold"
      fontSize="2xl"
      mt="12"
      mb="6"
      pb="2"
      borderBottomWidth="1px"
    >
      {children}
    </styled.h2>
  ),
  h3: ({ children }) => (
    <styled.h3
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      color="fg"
      lineHeight="tight"
      fontWeight="semibold"
      fontSize="xl"
      mt="8"
    >
      {children}
    </styled.h3>
  ),
  h4: ({ children }) => (
    <styled.h4
      id={children?.toString().toLowerCase().replace(/\s+/g, "-")}
      color="fg"
      lineHeight="tight"
      fontWeight="semibold"
      fontSize="lg"
      mt="6"
    >
      {children}
    </styled.h4>
  ),
  p: ({ children }) => (
    <styled.p my="4" lineHeight="relaxed">
      {children}
    </styled.p>
  ),
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
    <styled.strong color="fg" fontWeight="semibold">
      {children}
    </styled.strong>
  ),
  ul: ({ children }) => (
    <styled.ul listStyleType="disc" my="4" pl="6">
      {children}
    </styled.ul>
  ),
  ol: ({ children }) => (
    <styled.ol listStyleType="decimal" my="4" pl="6">
      {children}
    </styled.ol>
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
      className={chip({ variant: "secondary", size: "md" })}
      px="0.5"
      color="secondary.fg"
      userSelect="auto"
    >
      {children}
    </styled.code>
  ),
  blockquote: ({ children }) => (
    <styled.blockquote
      fontWeight="medium"
      fontStyle="italic"
      color="fg"
      borderLeftWidth="4px"
      borderLeftColor="border"
      paddingLeft="4"
      css={{
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
    <styled.div rounded="mb" borderWidth="1px">
      <Table {...props} />
    </styled.div>
  ),
  thead: (props) => <TableHeader bg="muted" {...props} />,
  tbody: TableBody,
  tr: TableRow,
  th: (props) => <TableHead color="fg" {...props} />,
  td: TableCell,
  ComponentPreview,
  ComponentSource,
  PackageInstaller,
  CodeBlock,
  Step: (props) => (
    <styled.h3
      mt="8"
      mb="4"
      scrollMargin="20"
      fontWeight="medium"
      letterSpacing="tight"
      {...props}
    />
  ),
  Steps: (props) => (
    <styled.div
      my="4"
      ml="4"
      pl="8"
      borderLeftWidth="1px"
      counterReset="step"
      css={{
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
      <Alert variant={variant} my="4">
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
      bg={{ base: "zinc.100", _dark: "zinc.900" }}
      p="4"
      borderWidth="1px"
      rounded="md"
      css={{
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
};

export default components;
