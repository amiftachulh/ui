import { styled } from "styled-system/jsx";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <styled.div display="flex" flexDir="column" spaceY="3">
      <Skeleton w="250px" h="125px" rounded="xl" />
      <styled.div spaceY="2">
        <Skeleton w="250px" h="4" />
        <Skeleton w="200px" h="4" />
      </styled.div>
    </styled.div>
  );
}
