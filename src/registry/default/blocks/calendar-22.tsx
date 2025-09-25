"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Calendar22() {
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
      <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
        <Label htmlFor="date" css={{ px: "1" }}>
          Date of birth
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              css={{ w: "48", justifyContent: "space-between", fontWeight: "normal" }}
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
    </styled.div>
  );
}
