import { styled } from "styled-system/jsx";
import { Badge } from "@/registry/default/ui/badge";
import { Spinner } from "@/registry/default/ui/spinner";

export function SpinnerBadge() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Loading
      </Badge>
    </styled.div>
  );
}
