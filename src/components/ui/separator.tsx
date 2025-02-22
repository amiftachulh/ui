import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cx } from "styled-system/css";
import { separator } from "styled-system/recipes";

const Separator = ({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    className={cx(separator(), className)}
    data-orientation={orientation}
    {...props}
  />
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
