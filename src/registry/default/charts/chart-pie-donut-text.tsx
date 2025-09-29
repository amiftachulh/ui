"use client";

import * as React from "react";
import { LuTrendingUp } from "react-icons/lu";
import { Label, Pie, PieChart } from "recharts";
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

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--colors-chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--colors-chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--colors-chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--colors-chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--colors-chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card css={{ display: "flex", flexDir: "column" }}>
      <CardHeader css={{ alignItems: "center", pb: "0" }}>
        <CardTitle>Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent css={{ flex: "1", pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", maxH: "250px" }}
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <styled.tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          css={{ fill: "fg", textStyle: "3xl", fontWeight: "bold" }}
                        >
                          {totalVisitors.toLocaleString()}
                        </styled.tspan>
                        <styled.tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          css={{ fill: "muted.fg" }}
                        >
                          Visitors
                        </styled.tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter css={{ flexDir: "column", gap: "2", textStyle: "sm" }}>
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
        <styled.div css={{ color: "muted.fg", lineHeight: "none" }}>
          Showing total visitors for the last 6 months
        </styled.div>
      </CardFooter>
    </Card>
  );
}
