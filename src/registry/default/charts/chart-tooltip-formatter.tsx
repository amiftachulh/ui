"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { styled } from "styled-system/jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
];

const chartConfig = {
  running: {
    label: "Running",
    color: "var(--colors-chart-1)",
  },
  swimming: {
    label: "Swimming",
    color: "var(--colors-chart-2)",
  },
} satisfies ChartConfig;

export function ChartTooltipFormatter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Formatter</CardTitle>
        <CardDescription>Tooltip with custom formatter .</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar dataKey="running" stackId="a" fill="var(--color-running)" radius={[0, 0, 4, 4]} />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value, name) => (
                    <styled.div
                      css={{
                        color: "muted.fg",
                        display: "flex",
                        minW: "130px",
                        alignItems: "center",
                        textStyle: "xs",
                      }}
                    >
                      {chartConfig[name as keyof typeof chartConfig]?.label || name}
                      <styled.div
                        css={{
                          color: "fg",
                          ml: "auto",
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.5",
                          fontFamily: "mono",
                          fontWeight: "medium",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {value}
                        <styled.span css={{ color: "muted.fg", fontWeight: "normal" }}>
                          kcal
                        </styled.span>
                      </styled.div>
                    </styled.div>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
