import { Button } from "@/components/ui/button";
import { flex } from "styled-system/patterns";

export default function ButtonSizes() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
