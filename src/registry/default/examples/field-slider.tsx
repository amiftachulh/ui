"use client";

import { useState } from "react";
import { styled } from "styled-system/jsx";
import { Field, FieldDescription, FieldTitle } from "@/registry/default/ui/field";
import { Slider } from "@/registry/default/ui/slider";

export default function FieldSlider() {
  const [value, setValue] = useState([200, 800]);

  return (
    <styled.div css={{ w: "full", maxW: "md" }}>
      <Field>
        <FieldTitle>Price Range</FieldTitle>
        <FieldDescription>
          Set your budget range ($
          <styled.span css={{ fontWeight: "medium", fontVariantNumeric: "tabular-nums" }}>
            {value[0]}
          </styled.span>{" "}
          -{" "}
          <styled.span css={{ fontWeight: "medium", fontVariantNumeric: "tabular-nums" }}>
            {value[1]}
          </styled.span>
          ).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          css={{ mt: "2", w: "full" }}
          aria-label="Price Range"
        />
      </Field>
    </styled.div>
  );
}
