"use client";

import { LuTrendingUp } from "react-icons/lu";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
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

export const description = "A radial chart with stacked sections";

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }];

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

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].desktop + chartData[0].mobile;

  return (
    <Card css={{ display: "flex", flexDir: "column" }}>
      <CardHeader css={{ alignItems: "center", pb: "0" }}>
        <CardTitle>Radial Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent css={{ display: "flex", flex: "1", alignItems: "center", pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", w: "full", maxW: "250px" }}
        >
          <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <styled.tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          css={{ fill: "fg", textStyle: "2xl", fontWeight: "bold" }}
                        >
                          {totalVisitors.toLocaleString()}
                        </styled.tspan>
                        <styled.tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          css={{ fill: "muted.fg" }}
                        >
                          Visitors
                        </styled.tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className={css({ stroke: "transparent", strokeWidth: "2" })}
            />
            <RadialBar
              dataKey="mobile"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className={css({ stroke: "transparent", strokeWidth: "2" })}
            />
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
