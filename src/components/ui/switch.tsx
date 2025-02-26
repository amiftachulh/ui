import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { switchRecipe } from "styled-system/recipes";

const classes = switchRecipe();

const SwitchBase = ({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) => (
  <SwitchPrimitive.Root className={cx("peer", classes.root, className)} {...props}>
    <SwitchPrimitive.Thumb className={classes.thumb} />
  </SwitchPrimitive.Root>
);
const Switch = styled(SwitchBase);
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
