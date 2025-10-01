"use client";

import { LuTrendingUp } from "react-icons/lu";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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

export const description = "A radar chart with dots";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--colors-chart-1)",
  },
} satisfies ChartConfig;

export function ChartRadarDots() {
  return (
    <Card>
      <CardHeader css={{ alignItems: "center" }}>
        <CardTitle>Radar Chart - Dots</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent css={{ pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", maxH: "250px" }}
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
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
      </CardFooter>
    </Card>
  );
}
