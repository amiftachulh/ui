"use client";

import * as React from "react";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/default/ui/card";

export default function Calendar20() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
  const [selectedTime, setSelectedTime] = React.useState<string | null>("10:00");
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  });

  const bookedDates = Array.from({ length: 3 }, (_, i) => new Date(2025, 5, 17 + i));

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
      <Card css={{ gap: "0", p: "0" }}>
        <CardContent css={{ pos: "relative", p: "0", md: { pr: "48" } }}>
          <styled.div css={{ p: "6" }}>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              disabled={bookedDates}
              showOutsideDays={false}
              modifiers={{
                booked: bookedDates,
              }}
              modifiersClassNames={{
                booked: css({ "& > button": { textDecoration: "line-through", opacity: 1 } }),
              }}
              css={{
                bg: "transparent",
                p: "0",
                "--cell-size": "2.5rem",
                md: {
                  "--cell-size": "3rem",
                },
              }}
              formatters={{
                formatWeekdayName: (date) => {
                  return date.toLocaleString("en-US", { weekday: "short" });
                },
              }}
            />
          </styled.div>
          <styled.div
            css={{
              scrollbar: "hidden",
              insetY: "0",
              right: "0",
              display: "flex",
              maxH: "72",
              w: "full",
              scrollPaddingBottom: "6",
              flexDir: "column",
              gap: "4",
              overflowY: "auto",
              borderTopWidth: "1px",
              p: "6",
              md: {
                pos: "absolute",
                maxH: "none",
                w: "48",
                borderTopWidth: "0",
                borderLeftWidth: "1px",
              },
            }}
          >
            <styled.div css={{ display: "grid", gap: "2" }}>
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "primary" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  css={{ w: "full", shadow: "none" }}
                >
                  {time}
                </Button>
              ))}
            </styled.div>
          </styled.div>
        </CardContent>
        <CardFooter
          css={{
            display: "flex",
            flexDir: "column",
            gap: "4",
            borderTopWidth: "1px",
            px: "6",
            py: "5!",
            md: { flexDir: "row" },
          }}
        >
          <styled.div css={{ textStyle: "sm" }}>
            {date && selectedTime ? (
              <>
                Your meeting is booked for{" "}
                <styled.span css={{ fontWeight: "medium" }}>
                  {" "}
                  {date?.toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}{" "}
                </styled.span>
                at <styled.span css={{ fontWeight: "medium" }}>{selectedTime}</styled.span>.
              </>
            ) : (
              <>Select a date and time for your meeting.</>
            )}
          </styled.div>
          <Button
            disabled={!date || !selectedTime}
            css={{ w: "full", md: { ml: "auto", w: "auto" } }}
            variant="outline"
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </styled.div>
  );
}
