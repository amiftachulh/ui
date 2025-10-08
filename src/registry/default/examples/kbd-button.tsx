import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Kbd } from "@/registry/default/ui/kbd";

export default function KbdButton() {
  return (
    <styled.div css={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4" }}>
      <Button variant="outline" size="sm" css={{ pr: "2" }}>
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button variant="outline" size="sm" css={{ pr: "2" }}>
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </styled.div>
  );
}
