import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      css={{ w: "full", maxW: "sm" }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} css={{ md: { flexBasis: "1/2" }, lg: { flexBasis: "1/3" } }}>
            <styled.div css={{ p: "1" }}>
              <Card>
                <CardContent
                  css={{
                    display: "flex",
                    aspectRatio: "square",
                    alignItems: "center",
                    justifyContent: "center",
                    p: "6",
                  }}
                >
                  <styled.span css={{ textStyle: "3xl", fontWeight: "semibold" }}>
                    {index + 1}
                  </styled.span>
                </CardContent>
              </Card>
            </styled.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
