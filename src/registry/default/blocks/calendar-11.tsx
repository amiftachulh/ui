"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar11() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 17),
    to: new Date(2025, 5, 20),
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
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          startMonth={new Date(2025, 5, 1)}
          endMonth={new Date(2025, 6, 31)}
          disableNavigation
          css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
        />
        <styled.div css={{ color: "muted.fg", textAlign: "center", textStyle: "xs" }}>
          We are open in June and July only.
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
