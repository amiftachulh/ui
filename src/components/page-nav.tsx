import { styled } from "styled-system/jsx";

export function PageNav({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <styled.div css={{ scrollMarginTop: "24" }} {...props}>
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
