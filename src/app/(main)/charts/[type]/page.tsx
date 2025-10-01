import * as React from "react";
import { notFound } from "next/navigation";
import { styled } from "styled-system/jsx";
import { ChartDisplay } from "@/components/chart-display";
import { charts } from "../charts";

interface ChartPageProps {
  params: Promise<{ type: string }>;
}

const chartTypes = ["area", "bar", "line", "pie", "radar"] as const;

type ChartType = (typeof chartTypes)[number];

export async function generateStaticParams() {
  return chartTypes.map((type) => ({ type }));
}

export default async function ChartPage({ params }: ChartPageProps) {
  const { type } = await params;

  if (!chartTypes.includes(type as ChartType)) {
    return notFound();
  }

  const chartType = type as ChartType;
  const chartList = charts[chartType];

  return (
    <styled.div css={{ display: "grid", flex: "1", gap: "12", pb: "10", lg: { gap: "24" } }}>
      <styled.h2 css={{ srOnly: true }}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Charts
      </styled.h2>
      <styled.div
        css={{
          display: "grid",
          flex: "1",
          scrollMarginTop: "20",
          alignItems: "stretch",
          gap: "10",
          md: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "6" },
          lg: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
          xl: { gap: "10" },
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => {
          const chart = chartList[index];
          return chart ? (
            <ChartDisplay
              key={chart.id}
              name={chart.id}
              css={
                chart.fullWidth
                  ? {
                      md: { gridColumn: "span 2" },
                      lg: { gridColumn: "span 3" },
                    }
                  : undefined
              }
            >
              <chart.component />
            </ChartDisplay>
          ) : (
            <styled.div
              key={`empty-${index}`}
              css={{
                display: "none",
                aspectRatio: "square",
                w: "full",
                rounded: "lg",
                borderWidth: "1px",
                borderStyle: "dashed",
                xl: { display: "block" },
              }}
            />
          );
        })}
      </styled.div>
    </styled.div>
  );
}
