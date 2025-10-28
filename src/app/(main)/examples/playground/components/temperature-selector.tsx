"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";
import { styled } from "styled-system/jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

export function TemperatureSelector({ defaultValue }: TemperatureSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <styled.div css={{ display: "grid", gap: "2", pt: "2" }}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <styled.div css={{ display: "grid", gap: "4" }}>
            <styled.div
              css={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Label htmlFor="temperature">Temperature</Label>
              <styled.span
                css={{
                  color: "muted.fg",
                  w: "12",
                  rounded: "md",
                  borderWidth: "1px",
                  borderColor: "transparent",
                  px: "2",
                  py: "0.5",
                  textAlign: "right",
                  textStyle: "sm",
                  _hover: {
                    borderColor: "border",
                  },
                }}
              >
                {value}
              </styled.span>
            </styled.div>
            <Slider
              id="temperature"
              max={1}
              defaultValue={value}
              step={0.1}
              onValueChange={setValue}
              aria-label="Temperature"
            />
          </styled.div>
        </HoverCardTrigger>
        <HoverCardContent align="start" css={{ w: "260px", textStyle: "sm" }} side="left">
          Controls randomness: lowering results in less random completions. As the temperature
          approaches zero, the model will become deterministic and repetitive.
        </HoverCardContent>
      </HoverCard>
    </styled.div>
  );
}
