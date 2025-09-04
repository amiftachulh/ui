"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Card, CardContent } from "@/registry/default/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/registry/default/ui/carousel";

export default function CarouselApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <styled.div css={{ mx: "auto", maxW: "xs" }}>
      <Carousel setApi={setApi} css={{ w: "full", maxW: "xs" }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <styled.div css={{ py: "2", textAlign: "center", textStyle: "sm", color: "muted.fg" }}>
        Slide {current} of {count}
      </styled.div>
    </styled.div>
  );
}
