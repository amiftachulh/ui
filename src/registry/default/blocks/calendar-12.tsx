"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { enUS, es } from "react-day-picker/locale";
import { styled } from "styled-system/jsx";
import { Calendar } from "@/registry/default/ui/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const localizedStrings = {
  en: {
    title: "Book an appointment",
    description: "Select the dates for your appointment",
  },
  es: {
    title: "Reserva una cita",
    description: "Selecciona las fechas para tu cita",
  },
} as const;

export default function Calendar12() {
  const [locale, setLocale] = React.useState<keyof typeof localizedStrings>("es");
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 8, 9),
    to: new Date(2025, 8, 17),
  });

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
        <CardHeader css={{ borderBottomWidth: "1px" }}>
          <CardTitle>{localizedStrings[locale].title}</CardTitle>
          <CardDescription>{localizedStrings[locale].description}</CardDescription>
          <CardAction>
            <Select
              value={locale}
              onValueChange={(value) => setLocale(value as keyof typeof localizedStrings)}
            >
              <SelectTrigger css={{ w: "100px" }}>
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            defaultMonth={dateRange?.from}
            numberOfMonths={2}
            locale={locale === "es" ? es : enUS}
            css={{ bg: "transparent", p: "0" }}
            buttonVariant="outline"
          />
        </CardContent>
      </Card>
    </styled.div>
  );
}
