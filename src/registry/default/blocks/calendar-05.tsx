"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar05() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <styled.div
      css={{
        w: "full",
        bg: "surface",
        minW: "0",
        minH: "svh",
        display: "flex",
        px: "6",
        py: "12",
        alignItems: "flex-start",
        justifyContent: "center",
        md: { py: "20" },
        xl: { py: "24" },
      }}
    >
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
      />
    </styled.div>
  );
}
