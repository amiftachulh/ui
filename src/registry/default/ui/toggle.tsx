import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { toggle, ToggleVariantProps } from "styled-system/recipes";

function Root({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & ToggleVariantProps) {
  return <TogglePrimitive.Root className={cx(toggle({ variant, size }), className)} {...props} />;
}
const Toggle = styled(Root);
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
