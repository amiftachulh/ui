import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/default/ui/carousel";

export default function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      css={{ w: "full", maxW: "xs", my: "24" }}
    >
      <CarouselContent css={{ mt: "-1", h: "200px" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} css={{ pt: "1", md: { flexBasis: "1/2" } }}>
            <styled.div css={{ p: "1" }}>
              <Card>
                <CardContent
                  css={{ display: "flex", alignItems: "center", justifyContent: "center", p: "6" }}
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
