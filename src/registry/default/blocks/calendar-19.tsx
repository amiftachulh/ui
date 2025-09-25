"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import { Card, CardContent, CardFooter } from "@/registry/default/ui/card";

export default function Calendar19() {
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
      <Card css={{ maxW: "325px", py: "4" }}>
        <CardContent css={{ px: "4" }}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            css={{ bg: "transparent", p: "0", "--cell-size": "2.375rem" }}
          />
        </CardContent>
        <CardFooter
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2",
            borderTopWidth: "1px",
            px: "4",
            pt: "4!",
          }}
        >
          {[
            { label: "Today", value: 0 },
            { label: "Tomorrow", value: 1 },
            { label: "In 3 days", value: 3 },
            { label: "In a week", value: 7 },
            { label: "In 2 weeks", value: 14 },
          ].map((preset) => (
            <Button
              key={preset.value}
              variant="outline"
              size="sm"
              css={{ flex: "1" }}
              onClick={() => {
                const newDate = addDays(new Date(), preset.value);
                setDate(newDate);
              }}
            >
              {preset.label}
            </Button>
          ))}
        </CardFooter>
      </Card>
    </styled.div>
  );
}
