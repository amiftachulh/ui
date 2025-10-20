import { styled } from "styled-system/jsx";
import { BlockDisplay } from "@/components/block-display";

export const dynamic = "force-static";
export const revalidate = false;

const FEATURED_BLOCKS = ["dashboard-01", "sidebar-07", "sidebar-03", "login-03", "login-04"];

export default function BlocksPage() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "12", md: { gap: "24" } }}>
      {FEATURED_BLOCKS.map((name) => (
        <BlockDisplay key={name} name={name} />
      ))}
    </styled.div>
  );
}
