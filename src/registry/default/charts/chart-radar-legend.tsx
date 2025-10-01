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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";

export const description = "A radar chart with a legend";

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

export function ChartRadarLegend() {
  return (
    <Card>
      <CardHeader css={{ alignItems: "center", pb: "4" }}>
        <CardTitle>Radar Chart - Legend</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", maxH: "250px" }}
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar dataKey="desktop" fill="var(--color-desktop)" fillOpacity={0.6} />
            <Radar dataKey="mobile" fill="var(--color-mobile)" />
            <ChartLegend className={css({ mt: "8" })} content={<ChartLegendContent />} />
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
