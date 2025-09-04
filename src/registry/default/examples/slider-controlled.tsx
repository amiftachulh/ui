"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

export default function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7]);

  return (
    <styled.div css={{ display: "grid", w: "full", gap: "3" }}>
      <styled.div
        css={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2" }}
      >
        <Label htmlFor="slider-demo-temperature">Temperature</Label>
        <styled.span css={{ color: "muted.fg", textStyle: "sm" }}>{value.join(", ")}</styled.span>
      </styled.div>
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={0}
        max={1}
        step={0.1}
      />
    </styled.div>
  );
}
