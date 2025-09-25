"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";
import { Label } from "@/registry/default/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export default function Calendar13() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>("dropdown");
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

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
      <styled.div css={{ display: "flex", flexDir: "column", gap: "4" }}>
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          captionLayout={dropdown}
          css={{ rounded: "lg", borderWidth: "1px", shadow: "sm" }}
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
            <SelectTrigger id="dropdown" size="sm" css={{ bg: "bg", w: "full" }}>
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
    </styled.div>
  );
}
