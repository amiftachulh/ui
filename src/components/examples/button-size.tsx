import { flex } from "styled-system/patterns";
import { Button } from "@/components/ui/button";

export default function ButtonSize() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
