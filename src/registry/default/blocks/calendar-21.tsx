"use client";

import * as React from "react";
import { DateRange } from "react-day-picker";
import { styled } from "styled-system/jsx";
import { Calendar, CalendarDayButton } from "@/registry/default/ui/calendar";

export default function Calendar21() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 5, 17),
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
      <Calendar
        mode="range"
        defaultMonth={range?.from}
        selected={range}
        onSelect={setRange}
        numberOfMonths={1}
        captionLayout="dropdown"
        css={{
          rounded: "lg",
          borderWidth: "1px",
          shadow: "sm",
          "--cell-size": "2.75rem",
          md: {
            "--cell-size": "3.25rem",
          },
        }}
        formatters={{
          formatMonthDropdown: (date) => {
            return date.toLocaleString("default", { month: "long" });
          },
        }}
        components={{
          DayButton: ({ children, modifiers, day, ...props }) => {
            const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6;

            return (
              <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                {children}
                {!modifiers.outside && <span>{isWeekend ? "$220" : "$100"}</span>}
              </CalendarDayButton>
            );
          },
        }}
      />
    </styled.div>
  );
}
