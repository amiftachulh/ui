import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

export default function ButtonVariant() {
  return (
    <styled.div display="flex" alignItems="center" flexWrap="wrap" gap="4">
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </styled.div>
  );
}
