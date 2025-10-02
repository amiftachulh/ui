"use client";

import { LuTrendingUp } from "react-icons/lu";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
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

export const description = "A radial chart with a label";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
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

export function ChartRadialLabel() {
  return (
    <Card css={{ display: "flex", flexDir: "column" }}>
      <CardHeader css={{ alignItems: "center", pb: "0" }}>
        <CardTitle>Radial Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent css={{ flex: "1", pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", maxH: "250px" }}
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className={css({
                  fill: "white",
                  textTransform: "capitalize",
                  mixBlendMode: "luminosity",
                })}
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
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
