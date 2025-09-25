"use client";

import * as React from "react";
import { LuPlus } from "react-icons/lu";
import { formatDateRange } from "little-date";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/default/ui/card";

const events = [
  {
    title: "Team Sync Meeting",
    from: "2025-06-12T09:00:00",
    to: "2025-06-12T10:00:00",
  },
  {
    title: "Design Review",
    from: "2025-06-12T11:30:00",
    to: "2025-06-12T12:30:00",
  },
  {
    title: "Client Presentation",
    from: "2025-06-12T14:00:00",
    to: "2025-06-12T15:00:00",
  },
];

export default function Calendar31() {
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
            css={{ bg: "transparent", p: "0" }}
            required
          />
        </CardContent>
        <CardFooter
          css={{
            display: "flex",
            flexDir: "column",
            alignItems: "flex-start",
            gap: "3",
            borderTopWidth: "1px",
            px: "4",
            pt: "4!",
          }}
        >
          <styled.div
            css={{
              display: "flex",
              w: "full",
              alignItems: "center",
              justifyContent: "space-between",
              px: "1",
            }}
          >
            <styled.div css={{ textStyle: "sm", fontWeight: "medium" }}>
              {date?.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </styled.div>
            <Button variant="ghost" size="icon" css={{ w: "6", h: "6" }} title="Add Event">
              <LuPlus />
              <styled.span css={{ srOnly: true }}>Add Event</styled.span>
            </Button>
          </styled.div>
          <styled.div css={{ display: "flex", w: "full", flexDir: "column", gap: "2" }}>
            {events.map((event) => (
              <styled.div
                key={event.title}
                css={{
                  bg: "muted",
                  pos: "relative",
                  rounded: "md",
                  p: "2",
                  pl: "6",
                  textStyle: "sm",
                  _after: {
                    content: '""',
                    pos: "absolute",
                    insetY: "2",
                    left: "2",
                    bg: "primary/70",
                    w: "1",
                    rounded: "full",
                  },
                }}
              >
                <styled.div css={{ fontWeight: "medium" }}>{event.title}</styled.div>
                <styled.div css={{ color: "muted.fg", textStyle: "xs" }}>
                  {formatDateRange(new Date(event.from), new Date(event.to))}
                </styled.div>
              </styled.div>
            ))}
          </styled.div>
        </CardFooter>
      </Card>
    </styled.div>
  );
}
