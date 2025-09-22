import { TbTrendingDown, TbTrendingUp } from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Badge } from "@/registry/default/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";

export function SectionCards() {
  return (
    <styled.div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "4",
        px: "4",
        "& > .card": {
          bgGradient: "to-t",
          gradientFrom: "primary/5",
          gradientTo: "card",
          shadow: "xs",
          _dark: {
            bg: "card",
          },
        },
        lg: { px: "6" },
        "@container main (width >= 36rem)": {
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        },
        "@container main (width >= 64rem)": {
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        },
      }}
    >
      <Card css={{ containerName: "card", containerType: "inline-size" }}>
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle
            css={{
              textStyle: "2xl",
              fontWeight: "semibold",
              fontVariantNumeric: "tabular-nums",
              "@container card (width >= 250px)": {
                textStyle: "3xl",
              },
            }}
          >
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TbTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter
          css={{ flexDir: "column", alignItems: "flex-start", gap: "1.5", textStyle: "sm" }}
        >
          <styled.div css={{ lineClamp: "1", display: "flex", gap: "2", fontWeight: "medium" }}>
            Trending up this month <TbTrendingUp className={css({ w: "4", h: "4" })} />
          </styled.div>
          <styled.div css={{ color: "muted.fg" }}>Visitors for the last 6 months</styled.div>
        </CardFooter>
      </Card>
      <Card css={{ containerName: "card", containerType: "inline-size" }}>
        <CardHeader>
          <CardDescription>New Customers</CardDescription>
          <CardTitle
            css={{
              textStyle: "2xl",
              fontWeight: "semibold",
              fontVariantNumeric: "tabular-nums",
              "@container card (width >= 250px)": {
                textStyle: "3xl",
              },
            }}
          >
            1,234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TbTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter
          css={{ flexDir: "column", alignItems: "flex-start", gap: "1.5", textStyle: "sm" }}
        >
          <styled.div css={{ lineClamp: "1", display: "flex", gap: "2", fontWeight: "medium" }}>
            Down 20% this period <TbTrendingDown className={css({ w: "4", h: "4" })} />
          </styled.div>
          <styled.div css={{ color: "muted.fg" }}>Acquisition needs attention</styled.div>
        </CardFooter>
      </Card>
      <Card css={{ containerName: "card", containerType: "inline-size" }}>
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle
            css={{
              textStyle: "2xl",
              fontWeight: "semibold",
              fontVariantNumeric: "tabular-nums",
              "@container card (width >= 250px)": {
                textStyle: "3xl",
              },
            }}
          >
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TbTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter
          css={{ flexDir: "column", alignItems: "flex-start", gap: "1.5", textStyle: "sm" }}
        >
          <styled.div css={{ lineClamp: "1", display: "flex", gap: "2", fontWeight: "medium" }}>
            Strong user retention <TbTrendingUp className={css({ w: "4", h: "4" })} />
          </styled.div>
          <styled.div css={{ color: "muted.fg" }}>Engagement exceed targets</styled.div>
        </CardFooter>
      </Card>
      <Card css={{ containerName: "card", containerType: "inline-size" }}>
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle
            css={{
              textStyle: "2xl",
              fontWeight: "semibold",
              fontVariantNumeric: "tabular-nums",
              "@container card (width >= 250px)": {
                textStyle: "3xl",
              },
            }}
          >
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TbTrendingUp />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter
          css={{ flexDir: "column", alignItems: "flex-start", gap: "1.5", textStyle: "sm" }}
        >
          <styled.div css={{ lineClamp: "1", display: "flex", gap: "2", fontWeight: "medium" }}>
            Steady performance increase <TbTrendingUp className={css({ w: "4", h: "4" })} />
          </styled.div>
          <styled.div css={{ color: "muted.fg" }}>Meets growth projections</styled.div>
        </CardFooter>
      </Card>
    </styled.div>
  );
}
