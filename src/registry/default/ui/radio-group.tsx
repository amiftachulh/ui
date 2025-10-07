"use client";

import * as React from "react";
import { LuCircle } from "react-icons/lu";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { css } from "styled-system/css";
import { createStyleContext } from "styled-system/jsx";
import { radioGroup } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(radioGroup);

const RadioGroup = withProvider(RadioGroupPrimitive.Root, "root");
const RadioGroupIndicator = withContext(RadioGroupPrimitive.Indicator, "indicator");

function Item(props: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item {...props}>
      <RadioGroupIndicator>
        <LuCircle
          className={css({
            pos: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            w: "2",
            h: "2",
            fill: "primary",
          })}
        />
      </RadioGroupIndicator>
    </RadioGroupPrimitive.Item>
  );
}
const RadioGroupItem = withContext(Item, "item");

export { RadioGroup, RadioGroupItem };
