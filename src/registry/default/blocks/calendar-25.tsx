"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Calendar25() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

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
      <styled.div css={{ display: "flex", flexDir: "column", gap: "6" }}>
        <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
          <Label htmlFor="date" css={{ px: "1" }}>
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                css={{ w: "full", justifyContent: "space-between", fontWeight: "normal" }}
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <LuChevronDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent css={{ w: "auto", overflow: "hidden", p: "0" }} align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </styled.div>
        <styled.div css={{ display: "flex", gap: "4" }}>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-from" css={{ px: "1" }}>
              From
            </Label>
            <Input
              type="time"
              id="time-from"
              step="1"
              defaultValue="10:30:00"
              css={{
                appearance: "none",
                "&::-webkit-calendar-picker-indicator": { appearance: "none", display: "none" },
              }}
            />
          </styled.div>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-to" css={{ px: "1" }}>
              To
            </Label>
            <Input
              type="time"
              id="time-to"
              step="1"
              defaultValue="12:30:00"
              css={{
                appearance: "none",
                "&::-webkit-calendar-picker-indicator": { appearance: "none", display: "none" },
              }}
            />
          </styled.div>
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
