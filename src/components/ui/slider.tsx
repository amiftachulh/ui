import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { slider } from "styled-system/recipes";

const classes = slider();

const Root = ({ className, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) => (
  <SliderPrimitive.Root className={cx(classes.root, className)} {...props}>
    <SliderPrimitive.Track className={classes.track}>
      <SliderPrimitive.Range className={classes.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={classes.thumb} />
  </SliderPrimitive.Root>
);
const Slider = styled(Root);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
