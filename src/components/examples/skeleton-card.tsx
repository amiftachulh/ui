import { styled } from "styled-system/jsx";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", spaceY: "3" }}>
      <Skeleton css={{ w: "250px", h: "125px", rounded: "xl" }} />
      <styled.div css={{ spaceY: "2" }}>
        <Skeleton css={{ w: "250px", h: "4" }} />
        <Skeleton css={{ w: "200px", h: "4" }} />
      </styled.div>
    </styled.div>
  );
}
