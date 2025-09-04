"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { LuCalendar } from "react-icons/lu";
import dayjs from "dayjs";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function DatePickerWithRange() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: dayjs("2022-01-20").add(7, "day").toDate(),
  });

  return (
    <styled.div css={{ display: "grid", gap: "2" }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            css={{
              w: "280px",
              justifyContent: "flex-start",
              textAlign: "left",
              fontWeight: "normal",
              color: !date ? "muted.fg" : "fg",
            }}
          >
            <LuCalendar />
            {date?.from ? (
              date.to ? (
                <>
                  {dayjs(date.from).format("DD MMM YYYY")} - {dayjs(date.to).format("DD MMM YYYY")}
                </>
              ) : (
                dayjs(date.from).format("DD MMM YYYY")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent css={{ w: "auto", p: "0" }} align="start">
          <Calendar
            autoFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </styled.div>
  );
}
