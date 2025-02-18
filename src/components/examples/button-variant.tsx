import { flex } from "styled-system/patterns";
import { Button } from "@/components/ui/button";

export default function ButtonVariant() {
  return (
    <div className={flex({ align: "center", gap: "4" })}>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  );
}
