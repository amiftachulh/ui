"use client";

import * as React from "react";
import { LuCalendar } from "react-icons/lu";
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

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export default function Calendar28() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date("2025-06-01"));
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));

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
          Subscription Date
        </Label>
        <styled.div css={{ pos: "relative", display: "flex", gap: "2" }}>
          <Input
            id="date"
            value={value}
            placeholder="June 01, 2025"
            css={{ pr: "10" }}
            onChange={(e) => {
              const date = new Date(e.target.value);
              setValue(e.target.value);
              if (isValidDate(date)) {
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
            <PopoverContent
              css={{ w: "auto", overflow: "hidden", p: "0" }}
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
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
      </styled.div>
    </styled.div>
  );
}
