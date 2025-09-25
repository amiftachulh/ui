"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Calendar14() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
  const bookedDates = Array.from({ length: 12 }, (_, i) => new Date(2025, 5, 15 + i));

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
        disabled={bookedDates}
        modifiers={{
          booked: bookedDates,
        }}
        modifiersClassNames={{
          booked: css({
            "& > button": {
              textDecoration: "line-through",
              opacity: 1,
            },
          }),
        }}
        css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
      />
    </styled.div>
  );
}
