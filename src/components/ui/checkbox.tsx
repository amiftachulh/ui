"use client";

import * as React from "react";
import { LuCheck } from "react-icons/lu";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { checkbox } from "styled-system/recipes";

function Root({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const classes = checkbox();

  return (
    <CheckboxPrimitive.Root className={cx("peer", classes.root, className)} {...props}>
      <CheckboxPrimitive.Indicator className={classes.indicator}>
        <LuCheck className={css({ w: "3.5", h: "3.5" })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
const Checkbox = styled(Root);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
