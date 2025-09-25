"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Calendar23() {
  const [range, setRange] = React.useState<DateRange | undefined>(undefined);

  return (
    <styled.div
      css={{
        w: "full",
        bg: "surface",
        minW: "0",
        minH: "svh",
        display: "flex",
        px: "4",
        py: "12",
        alignItems: "flex-start",
        justifyContent: "center",
        md: { py: "20" },
      }}
    >
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="dates" css={{ px: "1" }}>
          Select your stay
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="dates"
              css={{ w: "56", justifyContent: "space-between", fontWeight: "normal" }}
            >
              {range?.from && range?.to
                ? `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
                : "Select date"}
              <LuChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent css={{ w: "auto", overflow: "hidden", p: "0" }} align="start">
            <Calendar
              mode="range"
              selected={range}
              captionLayout="dropdown"
              onSelect={(range) => {
                setRange(range);
              }}
            />
          </PopoverContent>
        </Popover>
      </styled.div>
    </styled.div>
  );
}
