import { styled } from "styled-system/jsx";
import { Input } from "@/components/ui/input";

export default function InputSize() {
  return (
    <styled.div css={{ spaceY: "4" }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </styled.div>
  );
}
