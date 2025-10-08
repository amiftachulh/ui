import { styled } from "styled-system/jsx";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

export default function KbdGroupExample() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", alignItems: "center", gap: "4" }}>
      <styled.p css={{ color: "muted.fg", textStyle: "sm" }}>
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </styled.p>
    </styled.div>
  );
}
