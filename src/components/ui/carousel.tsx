"use client";

import * as React from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";

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
        onKeyDownCapture={handleKeyDown}
        className={cx(css({ pos: "relative" }), className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
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
    <div ref={carouselRef} className={css({ overflow: "hidden" })} data-slot="carousel-content">
      <div
        data-orientation={orientation}
        className={cx(
          css({ display: "flex" }),
          orientation === "horizontal" ? css({ ml: "-4" }) : css({ mt: "-4", flexDir: "column" }),
          className
        )}
        {...props}
      />
    </div>
  );
}
const CarouselContent = styled(Content);
CarouselContent.displayName = "CarouselContent";

function Item({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      data-orientation={orientation}
      className={cx(
        css({ minW: "0", flexShrink: "0", flexGrow: "0", flexBasis: "full" }),
        orientation === "horizontal" ? css({ pl: "4" }) : css({ pt: "4" }),
        className
      )}
      {...props}
    />
  );
}
const CarouselItem = styled(Item);
CarouselItem.displayName = "CarouselItem";

function CarouselPrevious({
  className,
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
      className={cx(
        css({ pos: "absolute", w: "8", h: "8", rounded: "full" }),
        orientation === "horizontal"
          ? css({ top: "50%", left: "-12", translateY: "-50%" })
          : css({ top: "-12", left: "50%", translateX: "-50%", rotate: "90deg" }),
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <LuArrowLeft />
      <span className={css({ srOnly: true })}>Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
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
      className={cx(
        css({ pos: "absolute", w: "8", h: "8", rounded: "full" }),
        orientation === "horizontal"
          ? css({ top: "50%", right: "-12", translateY: "-50%" })
          : css({ bottom: "-12", left: "50%", translateX: "-50%", rotate: "90deg" }),
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
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
