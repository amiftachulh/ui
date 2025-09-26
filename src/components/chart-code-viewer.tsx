import * as React from "react";
import { styled } from "styled-system/jsx";
import { ChartCopyButton } from "@/components/chart-copy-button";
import { Chart } from "@/components/chart-display";
import { useMediaQuery } from "@/registry/default/hooks/use-media-query";
import { Button } from "@/registry/default/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";

export function ChartCodeViewer({
  chart,
  children,
}: {
  chart: Chart;
} & React.ComponentProps<"div">) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const button = (
    <Button
      size="sm"
      variant="outline"
      css={{
        h: "6",
        bg: "transparent",
        color: "fg",
        px: "2",
        borderWidth: "1px",
        rounded: "6px",
        shadow: "none",
        textStyle: "xs",
        _hover: {
          bg: "muted",
        },
        _dark: {
          color: "fg",
        },
      }}
    >
      View Code
    </Button>
  );

  const content = (
    <styled.div css={{ display: "flex", minH: "0", flex: "1", flexDir: "column", gap: "0" }}>
      <styled.div
        css={{
          display: "none",
          "& [data-chart]": {
            mx: "auto",
            maxH: "35vh",
          },
          "& > div": {
            rounded: "0",
            borderWidth: "0",
            borderBottomWidth: "1px",
            shadow: "none",
          },
          sm: {
            display: "block",
          },
        }}
        className="chart-wrapper theme-container"
      >
        {children}
      </styled.div>
      <styled.div
        css={{
          display: "flex",
          minW: "0",
          flex: "1",
          flexDir: "column",
          overflow: "hidden",
          p: "4",
        }}
      >
        <styled.figure
          css={{
            bg: "card",
            mt: "0",
            display: "flex",
            h: "auto",
            minW: "0",
            flex: "1",
            flexDir: "column",
            overflow: "hidden",
            textStyle: "sm",
            rounded: "md",
          }}
        >
          <styled.figcaption
            css={{
              display: "flex",
              h: "12",
              flexShrink: "0",
              alignItems: "center",
              gap: "2",
              borderBottomWidth: "1px",
              py: "2",
              pr: "2",
              pl: "4",
              color: "fg",
              "& > svg": {
                w: "4",
                h: "4",
                color: "fg",
                opacity: "0.7",
              },
            }}
            data-language="tsx"
          >
            {chart.name}
            <styled.div css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2" }}>
              <ChartCopyButton name={chart.name} code={chart.files?.[0]?.content ?? ""} />
            </styled.div>
          </styled.figcaption>
          <styled.div
            dangerouslySetInnerHTML={{
              __html: chart.highlightedCode,
            }}
            css={{ scrollbar: "hidden", overflowY: "auto", px: "4" }}
          />
        </styled.figure>
      </styled.div>
    </styled.div>
  );

  if (!isDesktop) {
    return (
      <Drawer>
        <DrawerTrigger asChild>{button}</DrawerTrigger>
        <DrawerContent
          css={{ display: "flex", maxH: "80vh", flexDir: "column", sm: { maxH: "90vh" } }}
          className="[&>div.bg-muted]:shrink-0"
        >
          <DrawerHeader css={{ srOnly: true }}>
            <DrawerTitle>Code</DrawerTitle>
            <DrawerDescription>View the code for the chart.</DrawerDescription>
          </DrawerHeader>
          <styled.div css={{ display: "flex", h: "full", flexDir: "column", overflow: "auto" }}>
            {content}
          </styled.div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Sheet side="right">
      <SheetTrigger asChild>{button}</SheetTrigger>
      <SheetContent
        css={{
          display: "flex",
          flexDir: "column",
          gap: "0",
          borderLeftWidth: "0",
          p: "0",
          sm: { maxW: "sm" },
          md: { w: "700px", maxW: "700px" },
          _dark: { borderLeftWidth: "1px" },
        }}
      >
        <SheetHeader css={{ srOnly: true }}>
          <SheetTitle>Code</SheetTitle>
          <SheetDescription>View the code for the chart.</SheetDescription>
        </SheetHeader>
        {content}
      </SheetContent>
    </Sheet>
  );
}
