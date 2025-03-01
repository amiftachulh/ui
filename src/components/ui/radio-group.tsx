"use client";

import * as React from "react";
import { LuCircle } from "react-icons/lu";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { radioGroup } from "styled-system/recipes";

const classes = radioGroup();

function Root({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cx(classes.root, className)}
      {...props}
    />
  );
}
const RadioGroup = styled(Root);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

function Item({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cx(classes.item, className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={classes.indicator}
      >
        <LuCircle className={css({ w: "2.5", h: "2.5", fill: "primary", color: "primary" })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
const RadioGroupItem = styled(Item);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
