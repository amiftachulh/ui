import { styled } from "styled-system/jsx";

export function PageNav({ children, css, ...props }: React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ scrollMarginTop: "24", ...css }} {...props}>
      <styled.div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4",
          py: "4",
        }}
      >
        {children}
      </styled.div>
    </styled.div>
  );
}
