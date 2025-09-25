"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Calendar17() {
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
      <Card css={{ w: "fit", py: "4" }}>
        <CardContent css={{ px: "4" }}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            css={{ bg: "transparent", p: "0", "--cell-size": "2.625rem" }}
          />
        </CardContent>
        <CardFooter
          css={{
            display: "flex",
            gap: "2",
            borderTopWidth: "1px",
            px: "4",
            pt: "4!",
            "& > div": { w: "full" },
          }}
        >
          <div>
            <Label htmlFor="time-from" css={{ srOnly: true }}>
              Start Time
            </Label>
            <Input
              id="time-from"
              type="time"
              step="1"
              defaultValue="10:30:00"
              css={{
                appearance: "none",
                pl: "8",
                "&::-webkit-calendar-picker-indicator": { appearance: "none", display: "none" },
              }}
            />
          </div>
          <span>-</span>
          <div>
            <Label htmlFor="time-to" css={{ srOnly: true }}>
              End Time
            </Label>
            <Input
              id="time-to"
              type="time"
              step="1"
              defaultValue="12:30:00"
              css={{
                appearance: "none",
                pl: "8",
                "&::-webkit-calendar-picker-indicator": { appearance: "none", display: "none" },
              }}
            />
          </div>
        </CardFooter>
      </Card>
    </styled.div>
  );
}
