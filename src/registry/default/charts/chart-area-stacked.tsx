"use client";

import { LuTrendingUp } from "react-icons/lu";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";

export const description = "A stacked area chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--colors-chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--colors-chart-2)",
  },
} satisfies ChartConfig;

export function ChartAreaStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <styled.div
          css={{ display: "flex", w: "full", alignItems: "flex-start", gap: "2", textStyle: "sm" }}
        >
          <styled.div css={{ display: "grid", gap: "2" }}>
            <styled.div
              css={{
                display: "flex",
                alignItems: "center",
                gap: "2",
                lineHeight: "none",
                fontWeight: "medium",
              }}
            >
              Trending up by 5.2% this month <LuTrendingUp className={css({ w: "4", h: "4" })} />
            </styled.div>
            <styled.div
              css={{
                color: "muted.fg",
                display: "flex",
                alignItems: "center",
                gap: "2",
                lineHeight: "none",
              }}
            >
              January - June 2024
            </styled.div>
          </styled.div>
        </styled.div>
      </CardFooter>
    </Card>
  );
}
