import { styled } from "styled-system/jsx";
import { Skeleton } from "@/registry/default/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", spaceX: "4" }}>
      <Skeleton css={{ w: "12", h: "12", rounded: "full" }} />
      <styled.div css={{ spaceY: "2" }} className="space-y-2">
        <Skeleton css={{ w: "250px", h: "4" }} />
        <Skeleton css={{ w: "250px", h: "4" }} />
      </styled.div>
    </styled.div>
  );
}
