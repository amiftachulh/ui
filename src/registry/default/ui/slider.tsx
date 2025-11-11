import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { slider } from "styled-system/recipes";

const classes = slider();

function Root({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cx(classes.root, className)}
      {...props}
    >
      <SliderPrimitive.Track data-slot="slider-track" className={classes.track}>
        <SliderPrimitive.Range data-slot="slider-range" className={classes.range} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }).map((_, i) => (
        <SliderPrimitive.Thumb key={i} data-slot="slider-thumb" className={classes.thumb} />
      ))}
    </SliderPrimitive.Root>
  );
}
const Slider = styled(Root);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
