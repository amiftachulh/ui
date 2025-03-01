"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      w="full"
      maxW="xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <styled.div className="p-1">
              <Card>
                <CardContent
                  display="flex"
                  aspectRatio="square"
                  alignItems="center"
                  justifyContent="center"
                  p="6"
                >
                  <styled.span textStyle="4xl" fontWeight="semibold">
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
