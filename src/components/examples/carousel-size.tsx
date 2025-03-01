import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      w="full"
      maxW="sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} md={{ flexBasis: "1/2" }} lg={{ flexBasis: "1/3" }}>
            <styled.div p="1">
              <Card>
                <CardContent
                  display="flex"
                  aspectRatio="square"
                  alignItems="center"
                  justifyContent="center"
                  p="6"
                >
                  <styled.span textStyle="3xl" fontWeight="semibold">
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
