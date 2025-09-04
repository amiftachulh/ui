"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = useState<Date>();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      css={{ w: "fit", borderWidth: "1px", rounded: "md" }}
    />
  );
}
