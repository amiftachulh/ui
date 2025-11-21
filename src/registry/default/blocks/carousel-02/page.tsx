import { styled } from "styled-system/jsx";
import { CarouselDemo } from "@/registry/default/blocks/carousel-02/components/carousel-demo";

export default function Page() {
  return (
    <styled.div css={{ maxW: "2xl", h: "svh", mx: "auto", display: "grid", placeItems: "center" }}>
      <CarouselDemo />
    </styled.div>
  );
}
