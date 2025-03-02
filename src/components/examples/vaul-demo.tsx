"use client";

import * as React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Vaul,
  VaulClose,
  VaulContent,
  VaulDescription,
  VaulFooter,
  VaulHeader,
  VaulTitle,
  VaulTrigger,
} from "@/components/ui/vaul";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function VaulDemo() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Vaul>
      <VaulTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </VaulTrigger>
      <VaulContent>
        <styled.div mx="auto" w="full" maxW="sm">
          <VaulHeader>
            <VaulTitle>Move Goal</VaulTitle>
            <VaulDescription>Set your daily activity goal.</VaulDescription>
          </VaulHeader>
          <styled.div p="4" pb="0">
            <styled.div display="flex" alignItems="center" justifyContent="center" spaceX="2">
              <Button
                variant="outline"
                size="icon"
                w="8"
                h="8"
                flexShrink="0"
                rounded="full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <LuMinus />
                <styled.span srOnly>Decrease</styled.span>
              </Button>
              <styled.div flex="1" textAlign="center">
                <styled.div textStyle="7xl" fontWeight="bold" letterSpacing="tighter">
                  {goal}
                </styled.div>
                <styled.div fontSize="0.7rem" textTransform="uppercase" color="muted.fg">
                  Calories/day
                </styled.div>
              </styled.div>
              <Button
                variant="outline"
                size="icon"
                w="8"
                h="8"
                flexShrink="0"
                rounded="full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <LuPlus />
                <styled.span srOnly>Increase</styled.span>
              </Button>
            </styled.div>
            <styled.div mt="3" h="120px">
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
          <VaulFooter>
            <Button>Submit</Button>
            <VaulClose asChild>
              <Button variant="outline">Cancel</Button>
            </VaulClose>
          </VaulFooter>
        </styled.div>
      </VaulContent>
    </Vaul>
  );
}
