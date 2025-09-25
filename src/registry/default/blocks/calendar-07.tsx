"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar07() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 18),
    to: new Date(2025, 6, 7),
  });

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
      <styled.div css={{ display: "flex", minW: "0", flexDir: "column", gap: "2" }}>
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          min={2}
          max={20}
          css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
        />
        <styled.div css={{ color: "muted.fg", textAlign: "center", textStyle: "xs" }}>
          Your stay must be between 2 and 20 nights
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
