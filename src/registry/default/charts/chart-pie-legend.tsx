"use client";

import { Pie, PieChart } from "recharts";
import { css } from "styled-system/css";
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
  ChartLegend,
  ChartLegendContent,
} from "@/registry/default/ui/chart";

export const description = "A pie chart with a legend";

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

export function ChartPieLegend() {
  return (
    <Card css={{ display: "flex", flexDir: "column" }}>
      <CardHeader css={{ alignItems: "center", pb: "0" }}>
        <CardTitle>Pie Chart - Legend</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent css={{ flex: "1", pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{
            mx: "auto",
            aspectRatio: "square",
            maxH: "300px",
          }}
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className={css({
                transform: "translateY(-0.5rem)",
                flexWrap: "wrap",
                gap: "2",
                "& > *": { flexBasis: "25%", justifyContent: "center" },
              })}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
