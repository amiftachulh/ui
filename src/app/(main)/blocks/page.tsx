import { styled } from "styled-system/jsx";

export const dynamic = "force-static";
export const revalidate = false;

export default function BlocksPage() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "12", md: { gap: "24" } }}>
      Blocks
    </styled.div>
  );
}
