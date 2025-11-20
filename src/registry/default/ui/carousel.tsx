"use client";

import * as React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { carousel } from "styled-system/recipes";
import { Button } from "@/registry/default/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const classes = carousel();

function Root({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        data-slot="carousel"
        onKeyDownCapture={handleKeyDown}
        className={cx(classes.root, className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}
const Carousel = styled(Root);
Carousel.displayName = "Carousel";

function Content({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} data-slot="carousel-content" className={css({ overflow: "hidden" })}>
      <div data-orientation={orientation} className={cx(classes.content, className)} {...props} />
    </div>
  );
}
const CarouselContent = styled(Content);
CarouselContent.displayName = "CarouselContent";

function Item({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      data-orientation={orientation}
      className={cx(classes.item, className)}
      {...props}
    />
  );
}
const CarouselItem = styled(Item);
CarouselItem.displayName = "CarouselItem";

function CarouselPrevious({
  css: cssProp,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      data-orientation={orientation}
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      css={{
        pos: "absolute",
        w: "8",
        h: "8",
        rounded: "full",
        _horizontal: {
          top: "50%",
          left: "-12",
          transform: "translateY(-50%)",
        },
        _vertical: {
          top: "-12",
          left: "50%",
          transform: "translateX(-50%) rotate(90deg)",
        },
        ...cssProp,
      }}
      {...props}
    >
      <LuArrowLeft />
      <span className={css({ srOnly: true })}>Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  css: cssProp,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      data-orientation={orientation}
      variant={variant}
      size={size}
      disabled={!canScrollNext}
      onClick={scrollNext}
      css={{
        pos: "absolute",
        w: "8",
        h: "8",
        rounded: "full",
        _horizontal: {
          top: "50%",
          right: "-12",
          transform: "translateY(-50%)",
        },
        _vertical: {
          bottom: "-12",
          left: "50%",
          transform: "translateX(-50%) rotate(90deg)",
        },
        ...cssProp,
      }}
      {...props}
    >
      <LuArrowRight />
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
