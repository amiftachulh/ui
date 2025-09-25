"use client";

import * as React from "react";
import { LuCalendarPlus } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Calendar } from "@/registry/default/ui/calendar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";
import { Label } from "@/registry/default/ui/label";

export default function Calendar32() {
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
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              id="date"
              css={{ w: "48", justifyContent: "space-between", fontWeight: "normal" }}
            >
              {date ? date.toLocaleDateString() : "Select date"}
              <LuCalendarPlus />
            </Button>
          </DrawerTrigger>
          <DrawerContent css={{ w: "auto", overflow: "hidden", p: "0" }}>
            <DrawerHeader css={{ srOnly: true }}>
              <DrawerTitle>Select date</DrawerTitle>
              <DrawerDescription>Set your date of birth</DrawerDescription>
            </DrawerHeader>
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
              css={{ mx: "auto", "--cell-size": "clamp(0px, calc(100vw / 7.5), 52px)" }}
            />
          </DrawerContent>
        </Drawer>
        <styled.div css={{ color: "muted.fg", px: "1", textStyle: "sm" }}>
          This example works best on mobile.
        </styled.div>
      </styled.div>
    </styled.div>
  );
}
