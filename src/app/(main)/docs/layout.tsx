import { styled } from "styled-system/jsx";
import Navigation from "./navigation";

export default async function DocLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <styled.div css={{ display: "flex", gap: "4" }}>
      <Navigation />
      {children}
    </styled.div>
  );
}
