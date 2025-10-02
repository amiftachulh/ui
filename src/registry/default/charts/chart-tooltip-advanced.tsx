"use client";

import { Bar, BarChart, XAxis } from "recharts";
import { css } from "styled-system/css";
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

export function ChartTooltipAdvanced() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip - Advanced</CardTitle>
        <CardDescription>Tooltip with custom formatter and total.</CardDescription>
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
                  className={css({ w: "180px" })}
                  formatter={(value, name, item, index) => (
                    <>
                      <styled.div
                        css={{
                          w: "2.5",
                          h: "2.5",
                          flexShrink: "0",
                          rounded: "2px",
                          bg: "var(--clr-bg)",
                        }}
                        style={
                          {
                            "--clr-bg": `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
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
                      {/* Add this after the last item */}
                      {index === 1 && (
                        <styled.div
                          css={{
                            color: "fg",
                            mt: "1.5",
                            display: "flex",
                            flexBasis: "full",
                            alignItems: "center",
                            borderTopWidth: "1px",
                            pt: "1.5",
                            textStyle: "xs",
                            fontWeight: "medium",
                          }}
                        >
                          Total
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
                            {item.payload.running + item.payload.swimming}
                            <styled.span css={{ color: "muted.fg", fontWeight: "normal" }}>
                              kcal
                            </styled.span>
                          </styled.div>
                        </styled.div>
                      )}
                    </>
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
