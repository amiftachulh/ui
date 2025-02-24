import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { separator } from "styled-system/recipes";

const Root = ({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) => (
  <SeparatorPrimitive.Root
    className={cx(separator(), className)}
    orientation={orientation}
    {...props}
  />
);
const Separator = styled(Root);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
