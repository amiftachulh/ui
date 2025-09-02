import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

export default function ButtonVariant() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="input">Button</Button>
    </styled.div>
  );
}
