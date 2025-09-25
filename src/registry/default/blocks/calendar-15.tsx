"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar15() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

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
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
        showWeekNumber
      />
    </styled.div>
  );
}
