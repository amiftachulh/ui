"use client";

import {
  LuChartArea,
  LuChartBarBig,
  LuChartLine,
  LuChartPie,
  LuHexagon,
  LuMousePointer2,
  LuRadar,
} from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { ChartCodeViewer } from "@/components/chart-code-viewer";
import { ChartCopyButton } from "@/components/chart-copy-button";
import { Chart } from "@/components/chart-display";
import { Separator } from "@/registry/default/ui/separator";

export function ChartToolbar({
  chart,
  css,
  children,
}: {
  chart: Chart;
} & React.ComponentProps<typeof styled.div>) {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2", ...css }}>
      <styled.div
        css={{
          color: "muted.fg",
          display: "flex",
          alignItems: "center",
          gap: "1.5",
          pl: "1",
          textStyle: "sm",
          "& > svg": {
            w: "0.9rem",
            h: "0.9rem",
          },
        }}
      >
        <ChartTitle chart={chart} />
      </styled.div>
      <styled.div
        css={{
          ml: "auto",
          display: "flex",
          alignItems: "center",
          gap: "2",
          "& > form": { display: "flex" },
        }}
      >
        <ChartCopyButton
          name={chart.name}
          code={chart.files?.[0]?.content ?? ""}
          css={{
            w: "6",
            h: "6",
            bg: "transparent",
            color: "fg",
            rounded: "6px",
            shadow: "none",
            "& svg": {
              w: "3",
              h: "3",
            },
            _hover: {
              bg: "muted",
            },
            _dark: {
              color: "fg",
            },
          }}
        />
        <Separator
          orientation="vertical"
          css={{ mx: "0", display: "none", h: "4!", md: { display: "flex" } }}
        />
        <ChartCodeViewer chart={chart}>{children}</ChartCodeViewer>
      </styled.div>
    </styled.div>
  );
}

function ChartTitle({ chart }: { chart: Chart }) {
  if (chart.name.includes("charts-line")) {
    return (
      <>
        <LuChartLine /> Line Chart
      </>
    );
  }

  if (chart.name.includes("chart-bar")) {
    return (
      <>
        <LuChartBarBig /> Bar Chart
      </>
    );
  }

  if (chart.name.includes("chart-pie")) {
    return (
      <>
        <LuChartPie /> Pie Chart
      </>
    );
  }

  if (chart.name.includes("chart-area")) {
    return (
      <>
        <LuChartArea /> Area Chart
      </>
    );
  }

  if (chart.name.includes("chart-radar")) {
    return (
      <>
        <LuHexagon /> Radar Chart
      </>
    );
  }

  if (chart.name.includes("chart-radial")) {
    return (
      <>
        <LuRadar /> Radial Chart
      </>
    );
  }

  if (chart.name.includes("chart-tooltip")) {
    return (
      <>
        <LuMousePointer2 /> Tooltip Tooltip
      </>
    );
  }

  return chart.name;
}
