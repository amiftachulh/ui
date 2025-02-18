import { flex } from "styled-system/patterns";
import { Chip } from "@/components/ui/chip";

export default function ChipVariants() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Chip variant="primary">Badge</Chip>
      <Chip variant="secondary">Badge</Chip>
      <Chip variant="outline">Badge</Chip>
    </div>
  );
}
