"use client";

import * as React from "react";
import { LuClock2 } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/default/ui/card";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";

export default function Calendar16() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <styled.div
      css={{
        w: "full",
        bg: "surface",
        minW: "0",
        minH: "svh",
        display: "flex",
        px: "6",
        py: "12",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Card css={{ w: "fit", py: "4" }}>
        <CardContent css={{ px: "4" }}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            css={{ bg: "transparent", p: "0" }}
          />
        </CardContent>
        <CardFooter
          css={{
            display: "flex",
            flexDir: "column",
            gap: "6",
            borderTopWidth: "1px",
            px: "4",
            pt: "4!",
          }}
        >
          <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-from">Start Time</Label>
            <styled.div
              css={{ pos: "relative", display: "flex", w: "full", alignItems: "center", gap: "2" }}
            >
              <LuClock2
                className={css({
                  color: "muted.fg",
                  pointerEvents: "none",
                  pos: "absolute",
                  left: "2.5",
                  w: "4",
                  h: "4",
                  userSelect: "none",
                })}
              />
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
            </styled.div>
          </styled.div>
          <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "3" }}>
            <Label htmlFor="time-to">End Time</Label>
            <styled.div
              css={{ pos: "relative", display: "flex", w: "full", alignItems: "center", gap: "2" }}
            >
              <LuClock2
                className={css({
                  color: "muted.fg",
                  pointerEvents: "none",
                  pos: "absolute",
                  left: "2.5",
                  w: "4",
                  h: "4",
                  userSelect: "none",
                })}
              />
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
            </styled.div>
          </styled.div>
        </CardFooter>
      </Card>
    </styled.div>
  );
}
