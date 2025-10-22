import { styled } from "styled-system/jsx";

export function PageHeader({ children }: { children?: React.ReactNode }) {
  return (
    <styled.div
      css={{
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        gap: "2",
        py: "8",
        textAlign: "center",
        md: { py: "16" },
        lg: { py: "20" },
        xl: { gap: "4" },
      }}
    >
      {children}
    </styled.div>
  );
}

export function PageHeaderHeading({ children }: { children?: React.ReactNode }) {
  return (
    <styled.h1
      css={{
        color: "primary",
        lineHeight: "tight",
        maxW: "2xl",
        fontWeight: "semibold",
        letterSpacing: "tight",
        textStyle: "4xl",
        textWrap: "balance",
        w: "full",
        lg: {
          lineHeight: "1.1",
        },
        xl: {
          textStyle: "5xl",
          letterSpacing: "tighter",
        },
      }}
    >
      {children}
    </styled.h1>
  );
}

export function PageHeaderDescription({ children }: { children?: React.ReactNode }) {
  return (
    <styled.p css={{ color: "fg", maxW: "3xl", textWrap: "balance", sm: { textStyle: "lg" } }}>
      {children}
    </styled.p>
  );
}

export function PageActions({ children }: { children?: React.ReactNode }) {
  return (
    <styled.div
      css={{
        display: "flex",
        w: "full",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        pt: "2",
        "& > .button": {
          shadow: "none",
        },
      }}
    >
      {children}
    </styled.div>
  );
}
