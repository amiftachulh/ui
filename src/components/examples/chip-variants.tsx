import { flex } from "styled-system/patterns";
import { Chip } from "@/components/ui/chip";

export default function ChipVariants() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Chip variant="solid">Badge</Chip>
      <Chip variant="subtle">Badge</Chip>
      <Chip variant="outline">Badge</Chip>
    </div>
  );
}
