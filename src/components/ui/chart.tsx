"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function Container({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext value={{ config }}>
      <div
        data-chart={chartId}
        className={cx(
          css({
            "& .recharts-cartesian-axis-tick text": {
              fill: "muted.fg",
            },
            "& .recharts-cartesian-grid line[stroke='#ccc']": {
              stroke: "border/50",
            },
            "& .recharts-curve.recharts-tooltip-cursor": {
              stroke: "border",
            },
            "& .recharts-polar-grid [stroke='#ccc']": {
              stroke: "border",
            },
            "& .recharts-radial-bar-background-sector": {
              fill: "muted",
            },
            "& .recharts-rectangle.recharts-tooltip-cursor": {
              fill: "muted/50",
            },
            "& .recharts-reference-line [stroke='#ccc']": {
              stroke: "border",
            },
            display: "flex",
            aspectRatio: "16 / 9",
            justifyContent: "center",
            textStyle: "xs",
            "& .recharts-dot[stroke='#fff']": {
              stroke: "transparent",
            },
            "& .recharts-layer": {
              outline: "none",
            },
            "& .recharts-sector": {
              outline: "none",
            },
            "& .recharts-sector[stroke='#fff']": {
              stroke: "transparent",
            },
            "& .recharts-surface": {
              outline: "none",
            },
          }),
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext>
  );
}
const ChartContainer = styled(Container);
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
  }) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cx(css({ fontWeight: "medium" }), labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cx(css({ fontWeight: "medium" }), labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div
      className={cx(
        css({
          borderColor: "border/50",
          bg: "bg",
          display: "grid",
          minW: "8rem",
          alignItems: "start",
          gap: "1.5",
          rounded: "lg",
          borderWidth: "1px",
          px: "2.5",
          py: "1.5",
          textStyle: "xs",
          shadow: "xl",
        }),
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className={css({ display: "grid", gap: "1.5" })}>
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              key={item.dataKey}
              className={cx(
                css({
                  display: "flex",
                  w: "full",
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  gap: "2",
                  "& > svg": {
                    color: "muted.fg",
                    w: "2.5",
                    h: "2.5",
                  },
                }),
                indicator === "dot" && css({ alignItems: "center!" })
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cx(
                          css({
                            flexShrink: "0",
                            rounded: "2px",
                            borderColor: "var(--color-border)",
                            bg: "var(--color-bg)",
                          }),
                          indicator === "dot" && css({ w: "2.5!", h: "2.5!" }),
                          indicator === "line" && css({ w: "1!" }),
                          indicator === "dashed" &&
                            css({
                              w: "0!",
                              borderWidth: "1.5px!",
                              borderStyle: "dashed!",
                              bg: "transparent!",
                            }),
                          nestLabel && indicator === "dashed" && css({ my: "0.5" })
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cx(
                      css({
                        display: "flex",
                        flex: "1",
                        justifyContent: "space-between",
                        lineHeight: "none",
                      }),
                      nestLabel ? css({ alignItems: "flex-end!" }) : css({ alignItems: "center!" })
                    )}
                  >
                    <div className={css({ display: "grid", gap: "1.5" })}>
                      {nestLabel ? tooltipLabel : null}
                      <span className={css({ color: "muted.fg" })}>
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span
                        className={css({
                          color: "fg",
                          fontFamily: "mono",
                          fontWeight: "medium",
                          fontVariantNumeric: "tabular-nums",
                        })}
                      >
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
  }) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cx(
        css({ display: "flex", alignItems: "center", justifyContent: "center", gap: "4" }),
        verticalAlign === "top" ? css({ pb: "3!" }) : css({ pt: "3!" }),
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "1.5",
              "& > svg": {
                color: "muted.fg",
                w: "3",
                h: "3",
              },
            })}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={css({
                  w: "2",
                  h: "2",
                  flexShrink: "0",
                  rounded: "2px",
                })}
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
