"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { styled } from "styled-system/jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/registry/default/ui/carousel";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    title: "Misty Mountain Range",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Forest Trail",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Autumn Forest",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Lake at Sunset",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Wide Coastal Horizon",
  },
];

export function CarouselDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  function handleThumbClick(index: number) {
    api?.scrollTo(index);
  }

  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "4" }}>
      <Carousel setApi={setApi} opts={{ loop: true }} plugins={[Autoplay()]}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.id} css={{ h: "80" }}>
              <styled.img
                data-selected={current === index + 1}
                src={image.url}
                alt={image.title}
                css={{
                  w: "full",
                  h: "full",
                  objectFit: "cover",
                  rounded: "md",
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious css={{ display: "none", sm: { display: "flex" } }} />
        <CarouselNext css={{ display: "none", sm: { display: "flex" } }} />
      </Carousel>
      <Carousel css={{ mx: "auto" }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={image.id}
              css={{ h: "20", flexBasis: "20", cursor: "pointer" }}
              onClick={() => handleThumbClick(index)}
            >
              <styled.img
                data-selected={current === index + 1}
                src={image.url}
                alt={image.title}
                css={{
                  w: "full",
                  h: "full",
                  objectFit: "cover",
                  rounded: "md",
                  opacity: "0.5",
                  transition: "opacity 500ms ease-in-out",
                  "&[data-selected=true]": {
                    opacity: "1",
                  },
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </styled.div>
  );
}
