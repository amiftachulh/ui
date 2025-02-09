import * as React from "react";
import { LuCheck } from "react-icons/lu";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { checkbox } from "styled-system/recipes";

const classes = checkbox();

const Root = ({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) => (
  <CheckboxPrimitive.Root className={cx("peer", classes.root, className)} {...props}>
    <CheckboxPrimitive.Indicator className={classes.indicator}>
      <LuCheck className={css({ w: "4", h: "4" })} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
const Checkbox = styled(Root);

export { Checkbox };
