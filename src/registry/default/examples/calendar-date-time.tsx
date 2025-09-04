"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Calendar24() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <styled.div css={{ display: "flex", gap: "4" }}>
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="date-picker" css={{ px: "1" }}>
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              css={{ w: "32", justifyContent: "space-between", fontWeight: "normal" }}
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
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="time-picker" css={{ px: "1" }}>
          Time
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          css={{
            bg: "bg",
            appearance: "none",
            "&::-webkit-calendar-picker-indicator": {
              display: "none",
              appearance: "none",
            },
          }}
        />
      </styled.div>
    </styled.div>
  );
}
