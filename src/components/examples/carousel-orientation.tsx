import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      w="full"
      maxW="xs"
      my="24"
    >
      <CarouselContent mt="-1" h="200px">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} pt="1" md={{ flexBasis: "50%" }}>
            <styled.div p="1">
              <Card>
                <CardContent display="flex" alignItems="center" justifyContent="center" p="6">
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
