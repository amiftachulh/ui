import { styled } from "styled-system/jsx";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <styled.div display="flex" alignItems="center" spaceX="4">
      <Skeleton w="12" h="12" rounded="full" />
      <styled.div spaceY="2">
        <Skeleton w="250px" h="4" />
        <Skeleton w="250px" h="4" />
      </styled.div>
    </styled.div>
  );
}
