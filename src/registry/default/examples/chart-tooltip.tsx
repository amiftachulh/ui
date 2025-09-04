"use client";

import * as React from "react";
import { styled } from "styled-system/jsx";

export default function ChartTooltip() {
  return (
    <styled.div
      css={{
        display: "grid",
        aspectRatio: "16 / 9",
        w: "full",
        maxW: "md",
        justifyContent: "center",
        color: "fg",
        md: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "& > div": {
          pos: "relative",
          display: "flex",
          w: "224px",
          h: "137px",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        },
      }}
    >
      <div>
        <styled.div
          css={{
            pos: "absolute",
            top: "45px",
            left: "-45px",
            zIndex: 10,
            textStyle: "sm",
            fontWeight: "medium",
          }}
        >
          Label
        </styled.div>
        <styled.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 40"
          width="50"
          height="12"
          fill="none"
          css={{
            pos: "absolute",
            left: "-5px",
            top: "50px",
            zIndex: "10",
          }}
        >
          <g clipPath="url(#a)">
            <path
              fill="currentColor"
              d="M173.928 21.13C115.811 44.938 58.751 45.773 0 26.141c4.227-4.386 7.82-2.715 10.567-1.88 21.133 5.64 42.9 6.266 64.457 7.101 31.066 1.253 60.441-5.848 89.183-17.335 1.268-.418 2.325-1.253 4.861-2.924-14.582-2.924-29.165 2.089-41.845-3.76.212-.835.212-1.879.423-2.714 9.51-.627 19.231-1.253 28.742-2.089 9.51-.835 18.808-1.88 28.318-2.506 6.974-.418 9.933 2.924 7.397 9.19-3.17 8.145-7.608 15.664-11.623 23.391-.423.836-1.057 1.88-1.902 2.298-2.325.835-4.65 1.044-7.186 1.67-.422-2.088-1.479-4.386-1.268-6.265.423-2.506 1.902-4.595 3.804-9.19Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="currentColor" d="M0 0h193v40H0z" />
            </clipPath>
          </defs>
        </styled.svg>
        <TooltipDemo
          label="Page Views"
          payload={[
            { name: "Desktop", value: 186, fill: "var(--colors-chart-1)" },
            { name: "Mobile", value: 80, fill: "var(--colors-chart-2)" },
          ]}
          css={{ w: "8rem" }}
        />
      </div>
      <styled.div css={{ alignItems: "flex-end" }}>
        <styled.div
          css={{
            pos: "absolute",
            top: "0px",
            left: "122px",
            zIndex: 10,
            textStyle: "sm",
            fontWeight: "medium",
          }}
        >
          Name
        </styled.div>
        <styled.svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="42"
          fill="none"
          viewBox="0 0 122 148"
          css={{
            pos: "absolute",
            top: "10px",
            left: "85px",
            zIndex: 10,
            transform: "scaleX(-1)",
          }}
        >
          <g clipPath="url(#ab)">
            <path
              fill="currentColor"
              d="M0 2.65c6.15-4.024 12.299-2.753 17.812-.847a115.56 115.56 0 0 1 21.84 10.59C70.4 32.727 88.849 61.744 96.483 97.54c1.908 9.108 2.544 18.639 3.817 29.017 8.481-4.871 12.934-14.402 21.416-19.909 1.061 4.236-1.06 6.989-2.756 9.319-6.998 9.531-14.207 19.062-21.63 28.382-3.604 4.448-6.36 4.871-10.177 1.059-8.058-7.837-12.935-17.368-14.42-28.382 0-.424.636-1.059 1.485-2.118 9.118 2.33 6.997 13.979 14.843 18.215 3.393-14.614.848-28.593-2.969-42.149-4.029-14.19-9.33-27.746-17.812-39.82-8.27-11.86-18.66-21.392-30.11-30.287C26.93 11.758 14.207 6.039 0 2.65Z"
            />
          </g>
          <defs>
            <clipPath id="ab">
              <path fill="currentColor" d="M0 0h122v148H0z" />
            </clipPath>
          </defs>
        </styled.svg>
        <TooltipDemo
          label="Browser"
          hideLabel
          payload={[
            { name: "Chrome", value: 1286, fill: "var(--colors-chart-3)" },
            { name: "Firefox", value: 1000, fill: "var(--colors-chart-4)" },
          ]}
          indicator="dashed"
          css={{ w: "8rem" }}
        />
      </styled.div>
      <styled.div css={{ display: "none", md: { display: "flex" } }}>
        <TooltipDemo
          label="Page Views"
          payload={[{ name: "Desktop", value: 12486, fill: "var(--colors-chart-3)" }]}
          css={{ w: "9rem" }}
          indicator="line"
        />
      </styled.div>
      <styled.div css={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
        <styled.div
          css={{
            pos: "absolute",
            top: "100px",
            left: "80px",
            zIndex: 10,
            textStyle: "sm",
            fontWeight: "medium",
          }}
        >
          Indicator
        </styled.div>
        <TooltipDemo
          label="Browser"
          hideLabel
          payload={[{ name: "Chrome", value: 1286, fill: "var(--colors-chart-1)" }]}
          indicator="dot"
          css={{ w: "8rem" }}
        />
        <styled.svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="34"
          fill="none"
          viewBox="0 0 75 175"
          css={{
            pos: "absolute",
            top: "80px",
            left: "62px",
            zIndex: "10",
            transform: "rotate(-40deg)",
          }}
        >
          <g clipPath="url(#abc)">
            <path
              fill="currentColor"
              d="M20.187 175c-4.439-2.109-7.186-2.531-8.032-4.008-3.17-5.484-6.763-10.968-8.454-17.084-5.073-16.242-4.439-32.694-1.057-49.146 5.707-28.053 18.388-52.942 34.24-76.565 1.692-2.531 3.171-5.063 4.862-7.805 0-.21-.211-.632-.634-1.265-4.65 1.265-9.511 2.53-14.161 3.585-2.537.422-5.496.422-8.032-.421-1.48-.422-3.593-2.742-3.593-4.219 0-1.898 1.48-4.218 2.747-5.906 1.057-1.054 2.96-1.265 4.65-1.687C35.406 7.315 48.088 3.729 60.98.776c10.99-2.53 14.584 1.055 13.95 11.812-.634 11.18-.846 22.358-1.268 33.326-.212 3.375-.846 6.96-1.268 10.757-8.878-4.007-8.878-4.007-12.048-38.177C47.03 33.259 38.153 49.289 29.91 65.741 21.667 82.193 16.17 99.49 13.212 117.84c-2.959 18.984.634 36.912 6.975 57.161Z"
            />
          </g>
          <defs>
            <clipPath id="abc">
              <path fill="currentColor" d="M0 0h75v175H0z" />
            </clipPath>
          </defs>
        </styled.svg>
      </styled.div>
    </styled.div>
  );
}

function TooltipDemo({
  indicator = "dot",
  label,
  payload,
  hideLabel,
  hideIndicator,
  css,
}: {
  label: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  payload: {
    name: string;
    value: number;
    fill: string;
  }[];
  nameKey?: string;
  labelKey?: string;
} & React.ComponentProps<typeof styled.div>) {
  const tooltipLabel = hideLabel ? null : (
    <styled.div css={{ fontWeight: "medium" }}>{label}</styled.div>
  );

  if (!payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <styled.div
      css={{
        display: "grid",
        minW: "8rem",
        alignItems: "flex-start",
        gap: 1.5,
        rounded: "lg",
        borderWidth: "1px",
        borderColor: "border/50",
        bg: "bg",
        px: "2.5",
        py: "1.5",
        textStyle: "xs",
        shadow: "xl",
        transition: "all",
        transitionTimingFunction: "ease-in-out",
        _hover: {
          transform: "translateY(-0.25rem)",
        },
        ...css,
      }}
    >
      {!nestLabel ? tooltipLabel : null}
      <styled.div css={{ display: "grid", gap: "1.5" }}>
        {payload.map((item, index) => {
          const indicatorColor = item.fill;

          return (
            <styled.div
              key={index}
              css={{
                display: "flex",
                w: "full",
                alignItems: indicator === "dot" ? "center" : "stretch",
                gap: "2",
                "& > svg": {
                  w: "2.5",
                  h: "2.5",
                  color: "muted.fg",
                },
              }}
            >
              <>
                {!hideIndicator && (
                  <styled.div
                    data-indicator={indicator}
                    data-nest-label={nestLabel}
                    css={{
                      flexShrink: "0",
                      rounded: "2px",
                      borderColor: "var(--color-border)",
                      bg: "var(--color-bg)",
                      "&[data-indicator=dot]": { w: "2.5", h: "2.5" },
                      "&[data-indicator=line]": { w: "1" },
                      "&[data-indicator=dashed]": {
                        w: "0",
                        borderWidth: "1.5px",
                        borderStyle: "dashed",
                        bg: "transparent",
                        "&[data-nest-label=true]": { my: "0.5" },
                      },
                    }}
                    style={
                      {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <styled.div
                  css={{
                    display: "flex",
                    flex: "1",
                    alignItems: nestLabel ? "flex-end" : "center",
                    justifyContent: "space-between",
                    lineHeight: "none",
                  }}
                >
                  <styled.div css={{ display: "grid", gap: "1.5" }}>
                    {nestLabel ? tooltipLabel : null}
                    <styled.span css={{ color: "muted.fg" }}>{item.name}</styled.span>
                  </styled.div>
                  <styled.span
                    css={{
                      color: "fg",
                      fontFamily: "mono",
                      fontWeight: "medium",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {item.value.toLocaleString()}
                  </styled.span>
                </styled.div>
              </>
            </styled.div>
          );
        })}
      </styled.div>
    </styled.div>
  );
}
