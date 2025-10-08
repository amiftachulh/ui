import { styled } from "styled-system/jsx";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

export default function KbdDemo() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", alignItems: "center", gap: "4" }}>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </styled.div>
  );
}
