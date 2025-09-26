import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { z } from "zod";
import { ChartToolbar } from "@/components/chart-toolbar";
import { highlightCode } from "@/lib/highlight-code";
import { getRegistryItem } from "@/lib/registry";
import { registryItemSchema } from "@/registry/schema";

export type Chart = z.infer<typeof registryItemSchema> & {
  highlightedCode: string;
};

export async function ChartDisplay({
  name,
  children,
  css,
  className,
  ...props
}: { name: string } & React.ComponentProps<typeof styled.div>) {
  const chart = await getCachedRegistryItem(name);
  const highlightedCode = await getChartHighlightedCode(chart?.files?.[0]?.content ?? "");

  if (!chart || !highlightedCode) {
    return null;
  }

  return (
    <styled.div
      css={{
        display: "flex",
        flexDir: "column",
        overflow: "hidden",
        rounded: "xl",
        borderWidth: "1px",
        transition: "all",
        transitionDuration: "fast",
        transitionTimingFunction: "in-out",
        _hover: {
          zIndex: "30",
        },
        ...css,
      }}
      className={cx("themes-wrapper group", className)}
      {...props}
    >
      <ChartToolbar
        chart={{ ...chart, highlightedCode }}
        css={{
          bg: "card",
          color: "card.fg",
          pos: "relative",
          zIndex: "20",
          display: "flex",
          justifyContent: "flex-end",
          borderBottomWidth: "1px",
          px: "3",
          py: "2.5",
        }}
      >
        {children}
      </ChartToolbar>
      <styled.div
        css={{
          pos: "relative",
          zIndex: "10",
          "& > div": {
            borderWidth: "0",
            rounded: "0",
            shadow: "none",
          },
        }}
      >
        {children}
      </styled.div>
    </styled.div>
  );
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name);
});

const getChartHighlightedCode = React.cache(async (content: string) => {
  return await highlightCode(content);
});
