"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalendarMonthYear() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdown");
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <styled.div css={{ display: "flex", flexDir: "column", gap: "4" }}>
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border shadow-sm"
      />
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="dropdown" css={{ px: "1" }}>
          Dropdown
        </Label>
        <Select
          value={dropdown}
          onValueChange={(value) =>
            setDropdown(value as React.ComponentProps<typeof Calendar>["captionLayout"])
          }
        >
          <SelectTrigger id="dropdown" css={{ bg: "bg", w: "full" }}>
            <SelectValue placeholder="Dropdown" />
          </SelectTrigger>
          <SelectContent align="center">
            <SelectItem value="dropdown">Month and Year</SelectItem>
            <SelectItem value="dropdown-months">Month Only</SelectItem>
            <SelectItem value="dropdown-years">Year Only</SelectItem>
          </SelectContent>
        </Select>
      </styled.div>
    </styled.div>
  );
}
