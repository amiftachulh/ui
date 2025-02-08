import { flex } from "styled-system/patterns";
import { Button } from "@/components/ui/button";

export default function ButtonVariant() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button variant="solid">Button</Button>
      <Button variant="subtle">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  );
}
