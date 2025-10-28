"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";
import { styled } from "styled-system/jsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/default/ui/hover-card";
import { Label } from "@/registry/default/ui/label";
import { Slider } from "@/registry/default/ui/slider";

interface MaxLengthSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

export function MaxLengthSelector({ defaultValue }: MaxLengthSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <styled.div css={{ display: "grid", gap: "2", pt: "2" }}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <styled.div css={{ display: "grid", gap: "4" }}>
            <styled.div
              css={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Label htmlFor="maxlength">Maximum Length</Label>
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
              id="maxlength"
              max={4000}
              defaultValue={value}
              step={10}
              onValueChange={setValue}
              aria-label="Maximum Length"
            />
          </styled.div>
        </HoverCardTrigger>
        <HoverCardContent align="start" css={{ w: "260px", textStyle: "sm" }} side="left">
          The maximum number of tokens to generate. Requests can use up to 2,048 or 4,000 tokens,
          shared between prompt and completion. The exact limit varies by model.
        </HoverCardContent>
      </HoverCard>
    </styled.div>
  );
}
