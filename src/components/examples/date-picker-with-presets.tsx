"use client";

import * as React from "react";
import { LuCalendar } from "react-icons/lu";
import dayjs from "dayjs";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
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
          {date ? dayjs(date).format("YYYY-MM-DD") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ display: "flex", w: "auto", flexDir: "column", gap: "2", p: "2" }}>
        <Select onValueChange={(value) => setDate(dayjs().add(parseInt(value), "day").toDate())}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <styled.div css={{ rounded: "md", borderWidth: "1px" }}>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </styled.div>
      </PopoverContent>
    </Popover>
  );
}
