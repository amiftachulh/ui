"use client";

import * as React from "react";
import { LuCalendar } from "react-icons/lu";
import { parseDate } from "chrono-node";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Calendar29() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("In 2 days");
  const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined);
  const [month, setMonth] = React.useState<Date | undefined>(date);

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
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="date" css={{ px: "1" }}>
          Schedule Date
        </Label>
        <styled.div css={{ position: "relative", display: "flex", gap: "2" }}>
          <Input
            id="date"
            value={value}
            placeholder="Tomorrow or next week"
            css={{ pr: "10" }}
            onChange={(e) => {
              setValue(e.target.value);
              const date = parseDate(e.target.value);
              if (date) {
                setDate(date);
                setMonth(date);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                id="date-picker"
                variant="ghost"
                css={{
                  pos: "absolute",
                  top: "50%",
                  right: "2",
                  w: "6",
                  h: "6",
                  transform: "translateY(-50%)",
                }}
              >
                <LuCalendar className={css({ w: "3.5", h: "3.5" })} />
                <styled.span css={{ srOnly: true }}>Select date</styled.span>
              </Button>
            </PopoverTrigger>
            <PopoverContent css={{ w: "auto", overflow: "hidden", p: "0" }} align="end">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                month={month}
                onMonthChange={setMonth}
                onSelect={(date) => {
                  setDate(date);
                  setValue(formatDate(date));
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </styled.div>
        <styled.div css={{ color: "muted.fg", px: "1", textStyle: "sm" }}>
          Your post will be published on{" "}
          <styled.span css={{ fontWeight: "medium" }}>{formatDate(date)}</styled.span>.
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
