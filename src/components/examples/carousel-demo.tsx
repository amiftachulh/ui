import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <Carousel css={{ w: "full", maxW: "xs" }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
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
                  <styled.span css={{ textStyle: "4xl", fontWeight: "semibold" }}>
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
