import { styled } from "styled-system/jsx";
import { Chip } from "@/components/ui/chip";

export default function ChipVariants() {
  return (
    <styled.div display="flex" alignItems="center" gap="4">
      <Chip variant="primary">Badge</Chip>
      <Chip variant="secondary">Badge</Chip>
      <Chip variant="outline">Badge</Chip>
    </styled.div>
  );
}
