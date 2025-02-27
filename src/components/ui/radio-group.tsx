import * as React from "react";
import { LuCircle } from "react-icons/lu";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { radioGroup } from "styled-system/recipes";

const classes = radioGroup();

const Root = ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) => (
  <RadioGroupPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const RadioGroup = styled(Root);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const Item = ({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) => (
  <RadioGroupPrimitive.Item className={cx(classes.item, className)} {...props}>
    <RadioGroupPrimitive.Indicator className={classes.indicator}>
      <LuCircle className={css({ w: "2.5", h: "2.5", fill: "primary", color: "primary" })} />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
);
const RadioGroupItem = styled(Item);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
