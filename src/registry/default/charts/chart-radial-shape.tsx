"use client";

import { LuTrendingUp } from "react-icons/lu";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
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
import { ChartConfig, ChartContainer } from "@/registry/default/ui/chart";

export const description = "A radial chart with a custom shape";

const chartData = [{ browser: "safari", visitors: 1260, fill: "var(--color-safari)" }];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--colors-chart-2)",
  },
} satisfies ChartConfig;

export function ChartRadialShape() {
  return (
    <Card css={{ display: "flex", flexDir: "column" }}>
      <CardHeader css={{ alignItems: "center", pb: "0" }}>
        <CardTitle>Radial Chart - Shape</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent css={{ flex: "1", pb: "0" }}>
        <ChartContainer
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", maxH: "250px" }}
        >
          <RadialBarChart data={chartData} endAngle={100} innerRadius={80} outerRadius={140}>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className={css({
                _first: {
                  fill: "muted",
                },
                _last: {
                  fill: "bg",
                },
              })}
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                          css={{ fill: "fg", textStyle: "4xl", fontWeight: "bold" }}
                        >
                          {chartData[0].visitors.toLocaleString()}
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
            </PolarRadiusAxis>
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
