import { styled } from "styled-system/jsx";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
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
      <styled.h1
        css={{
          color: "primary",
          lineHeight: "tight",
          maxW: "2xl",
          fontWeight: "semibold",
          letterSpacing: "tight",
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
        {title}
      </styled.h1>
      <styled.p css={{ color: "fg", maxW: "3xl", textWrap: "balance", sm: { textStyle: "lg" } }}>
        {description}
      </styled.p>
    </styled.div>
  );
}
