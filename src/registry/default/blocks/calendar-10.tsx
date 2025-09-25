"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

export default function Calendar10() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 5, 12));
  const [month, setMonth] = React.useState<Date | undefined>(new Date());

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
      <Card>
        <CardHeader>
          <CardTitle>Appointment</CardTitle>
          <CardDescription>Find a date</CardDescription>
          <CardAction>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setMonth(new Date());
                setDate(new Date());
              }}
            >
              Today
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={setDate}
            css={{ bg: "transparent", p: "0" }}
          />
        </CardContent>
      </Card>
    </styled.div>
  );
}
