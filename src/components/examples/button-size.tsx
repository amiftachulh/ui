import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

export default function ButtonSize() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </styled.div>
  );
}
