import { styled } from "styled-system/jsx";
import { Badge } from "@/components/ui/badge";

export default function BadgeVariants() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      <Badge variant="primary">Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
    </styled.div>
  );
}
