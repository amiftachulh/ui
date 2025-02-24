"use client";

import * as React from "react";
import { LuCalendar } from "react-icons/lu";
import dayjs from "dayjs";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover } from "@/components/ui/popover";
import { Select } from "@/components/ui/select";

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
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
      </Popover.Trigger>
      <Popover.Content css={{ display: "flex", w: "auto", flexDir: "column", gap: "2", p: "2" }}>
        <Select.Root
          onValueChange={(value) => setDate(dayjs().add(parseInt(value), "day").toDate())}
        >
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="0">Today</Select.Item>
            <Select.Item value="1">Tomorrow</Select.Item>
            <Select.Item value="3">In 3 days</Select.Item>
            <Select.Item value="7">In a week</Select.Item>
          </Select.Content>
        </Select.Root>
        <styled.div className={css({ rounded: "md", borderWidth: "1px" })}>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </styled.div>
      </Popover.Content>
    </Popover.Root>
  );
}
