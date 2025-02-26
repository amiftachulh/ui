"use client";

import { useState } from "react";
import { LuCalendar } from "react-icons/lu";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          css={{
            w: "280px",
            justifyContent: "start",
            textAlign: "left",
            fontWeight: "normal",
            color: !date ? "muted.fg" : "fg",
          }}
        >
          <LuCalendar />
          {date ? dayjs(date).format("YYYY-MM-DD") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "auto", p: "0" }}>
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
      </PopoverContent>
    </Popover>
  );
}
