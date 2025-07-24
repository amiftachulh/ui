import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { switchRecipe } from "styled-system/recipes";

const classes = switchRecipe();

function Root({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root className={cx("peer", classes.root, className)} {...props}>
      <SwitchPrimitive.Thumb className={classes.thumb} />
    </SwitchPrimitive.Root>
  );
}
const Switch = styled(Root);
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
