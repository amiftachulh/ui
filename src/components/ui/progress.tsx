"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { progress } from "styled-system/recipes";

const classes = progress();

function Root({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root data-slot="progress" className={cx(classes.root, className)} {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={classes.indicator}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
const Progress = styled(Root);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
