"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar03() {
  const [dates, setDates] = React.useState<Date[]>([new Date(2025, 5, 12), new Date(2025, 6, 24)]);

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
      <Calendar
        mode="multiple"
        numberOfMonths={2}
        defaultMonth={dates[0]}
        required
        selected={dates}
        onSelect={setDates}
        max={5}
        css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
      />
    </styled.div>
  );
}
