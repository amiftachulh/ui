import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { separator } from "styled-system/recipes";

function Root({ className, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return <SeparatorPrimitive.Root className={cx(separator(), className)} {...props} />;
}
const Separator = styled(Root);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
