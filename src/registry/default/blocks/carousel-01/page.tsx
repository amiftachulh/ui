import { styled } from "styled-system/jsx";
import { CarouselDemo } from "@/registry/default/blocks/carousel-01/components/carousel-demo";

export default function Page() {
  return (
    <styled.div
      css={{ maxW: "2xl", h: "svh", mx: "auto", px: "4", display: "grid", placeItems: "center" }}
    >
      <CarouselDemo />
    </styled.div>
  );
}
