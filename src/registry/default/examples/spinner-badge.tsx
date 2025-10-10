import { styled } from "styled-system/jsx";
import { Badge } from "@/registry/default/ui/badge";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerBadge() {
  return (
    <styled.div
      css={{
        display: "flex",
        alignItems: "center",
        gap: "4",
        "& > .badge": {
          rounded: "1.2rem",
        },
      }}
    >
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
        Processing
      </Badge>
    </styled.div>
  );
}
