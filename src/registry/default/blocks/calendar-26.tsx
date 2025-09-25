"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function Calendar26() {
  const [openFrom, setOpenFrom] = React.useState(false);
  const [openTo, setOpenTo] = React.useState(false);
  const [dateFrom, setDateFrom] = React.useState<Date | undefined>(new Date("2025-06-01"));
  const [dateTo, setDateTo] = React.useState<Date | undefined>(new Date("2025-06-03"));

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
      <styled.div
        css={{ display: "flex", w: "full", maxW: "64", minW: "0", flexDir: "column", gap: "6" }}
      >
        <styled.div css={{ display: "flex", gap: "4" }}>
          <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "3" }}>
            <Label htmlFor="date-from" css={{ px: "1" }}>
              Check-in
            </Label>
            <Popover open={openFrom} onOpenChange={setOpenFrom}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-from"
                  css={{ w: "full", justifyContent: "space-between", fontWeight: "normal" }}
                >
                  {dateFrom
                    ? dateFrom.toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Select date"}
                  <LuChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent css={{ w: "auto", overflow: "hidden", p: "0" }} align="start">
                <Calendar
                  mode="single"
                  selected={dateFrom}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDateFrom(date);
                    setOpenFrom(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </styled.div>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-from" css={{ visibility: "hidden", px: "1" }}>
              From
            </Label>
            <Input
              type="time"
              id="time-from"
              step="1"
              defaultValue="10:30:00"
              css={{
                appearance: "none",
                "&::-webkit-calendar-picker-indicator": { display: "none", appearance: "none" },
              }}
            />
          </styled.div>
        </styled.div>
        <styled.div css={{ display: "flex", gap: "4" }}>
          <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "3" }}>
            <Label htmlFor="date-to" css={{ px: "1" }}>
              Check-out
            </Label>
            <Popover open={openTo} onOpenChange={setOpenTo}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-to"
                  css={{ w: "full", justifyContent: "space-between", fontWeight: "normal" }}
                >
                  {dateTo
                    ? dateTo.toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Select date"}
                  <LuChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent css={{ w: "auto", overflow: "hidden", p: "0" }} align="start">
                <Calendar
                  mode="single"
                  selected={dateTo}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDateTo(date);
                    setOpenTo(false);
                  }}
                  disabled={dateFrom && { before: dateFrom }}
                />
              </PopoverContent>
            </Popover>
          </styled.div>
          <styled.div css={{ display: "flex", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-to" css={{ visibility: "hidden", px: "1" }}>
              To
            </Label>
            <Input
              type="time"
              id="time-to"
              step="1"
              defaultValue="12:30:00"
              css={{
                appearance: "none",
                "&::-webkit-calendar-picker-indicator": { display: "none", appearance: "none" },
              }}
            />
          </styled.div>
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
