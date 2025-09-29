"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
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
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/default/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

export const description = "An interactive pie chart";

const desktopData = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "var(--colors-chart-1)",
  },
  february: {
    label: "February",
    color: "var(--colors-chart-2)",
  },
  march: {
    label: "March",
    color: "var(--colors-chart-3)",
  },
  april: {
    label: "April",
    color: "var(--colors-chart-4)",
  },
  may: {
    label: "May",
    color: "var(--colors-chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieInteractive() {
  const id = "pie-interactive";
  const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month);

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.month === activeMonth),
    [activeMonth]
  );
  const months = React.useMemo(() => desktopData.map((item) => item.month), []);

  return (
    <Card data-chart={id} css={{ display: "flex", flexDir: "column" }}>
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader css={{ flexDir: "row", alignItems: "flex-start", pb: "0" }}>
        <styled.div css={{ display: "grid", gap: "1" }}>
          <CardTitle>Pie Chart - Interactive</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </styled.div>
        <Select value={activeMonth} onValueChange={setActiveMonth}>
          <SelectTrigger
            css={{ ml: "auto", h: "7", w: "130px", rounded: "lg", pl: "2.5" }}
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" css={{ rounded: "xl" }}>
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  css={{ rounded: "lg", "& span": { display: "flex" } }}
                >
                  <styled.div
                    css={{ display: "flex", alignItems: "center", gap: "2", textStyle: "xs" }}
                  >
                    <styled.span
                      css={{ display: "flex", w: "3", h: "3", flexShrink: "0", rounded: "xs" }}
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </styled.div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent css={{ display: "flex", flex: "1", justifyContent: "center", pb: "0" }}>
        <ChartContainer
          id={id}
          config={chartConfig}
          css={{ mx: "auto", aspectRatio: "square", w: "full", maxW: "300px" }}
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
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
                          {desktopData[activeIndex].desktop.toLocaleString()}
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
    </Card>
  );
}
