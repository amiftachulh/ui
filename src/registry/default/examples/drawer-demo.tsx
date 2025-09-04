"use client";

import * as React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];

export default function DrawerDemo() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <styled.div css={{ mx: "auto", w: "full", maxW: "sm" }}>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <styled.div css={{ p: "4", pb: "0" }}>
            <styled.div
              css={{ display: "flex", alignItems: "center", justifyContent: "center", spaceX: "2" }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
                css={{ w: "8", h: "8", flexShrink: "0", rounded: "full" }}
              >
                <LuMinus />
                <styled.span css={{ srOnly: true }}>Decrease</styled.span>
              </Button>
              <styled.div css={{ flex: "1", textAlign: "center" }}>
                <styled.div
                  css={{ textStyle: "7xl", fontWeight: "bold", letterSpacing: "tighter" }}
                >
                  {goal}
                </styled.div>
                <styled.div
                  css={{ fontSize: "0.7rem", textTransform: "uppercase", color: "muted.fg" }}
                >
                  Calories/day
                </styled.div>
              </styled.div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
                css={{ w: "8", h: "8", flexShrink: "0", rounded: "full" }}
              >
                <LuPlus />
                <styled.span css={{ srOnly: true }}>Increase</styled.span>
              </Button>
            </styled.div>
            <styled.div css={{ mt: "3", h: "120px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "var(--colors-fg)",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </styled.div>
          </styled.div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </styled.div>
      </DrawerContent>
    </Drawer>
  );
}
