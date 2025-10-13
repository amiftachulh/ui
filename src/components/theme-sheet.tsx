"use client";

import { LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";
import { useColor } from "./theme-provider";

interface ThemeColor {
  name: string;
  light: string;
  dark: string;
}

const themeColors: ThemeColor[] = [
  { name: "neutral", light: "#171717", dark: "#e5e5e5" },
  { name: "red", light: "#fb2c36", dark: "#fb2c36" },
  { name: "rose", light: "#ff2056", dark: "#ff2056" },
  { name: "yellow", light: "#f0b100", dark: "#f0b100" },
  { name: "orange", light: "#ff6900", dark: "#f54900" },
  { name: "lime", light: "#00c950", dark: "#00bc7d" },
  { name: "blue", light: "#2b7fff", dark: "#155dfc" },
  { name: "violet", light: "#8e51ff", dark: "#7f22fe" },
];

export default function ThemeSheet() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { color, setColor } = useColor();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <styled.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            css={{ w: "4.5", h: "4.5" }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 3l0 18" />
            <path d="M12 9l4.65 -4.65" />
            <path d="M12 14.3l7.37 -7.37" />
            <path d="M12 19.6l8.85 -8.85" />
          </styled.svg>
          <styled.span css={{ srOnly: true }}>Toggle theme</styled.span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Theme</SheetTitle>
          <SheetDescription>Choose your preferred theme.</SheetDescription>
        </SheetHeader>
        <styled.div css={{ display: "grid", gap: "4", px: "4" }}>
          <ToggleGroup
            variant="outline"
            type="single"
            value={theme}
            css={{ w: "full", shadow: "none" }}
          >
            <ToggleGroupItem
              value="light"
              aria-label="Toggle light mode"
              onClick={() => setTheme("light")}
            >
              <LuSun /> Light
            </ToggleGroupItem>
            <ToggleGroupItem
              value="system"
              aria-label="Toggle system mode"
              onClick={() => setTheme("system")}
            >
              <LuMonitor /> System
            </ToggleGroupItem>
            <ToggleGroupItem
              value="dark"
              aria-label="Toggle dark mode"
              onClick={() => setTheme("dark")}
            >
              <LuMoon /> Dark
            </ToggleGroupItem>
          </ToggleGroup>
          <styled.div>
            <styled.h2 css={{ fontWeight: "medium", textStyle: "sm", mb: "2" }}>Colors</styled.h2>
            <styled.div
              css={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2" }}
            >
              {themeColors.map((c) => (
                <Button
                  key={c.name}
                  data-active={color === c.name}
                  variant="outline"
                  css={{
                    bg: "bg",
                    textStyle: "sm",
                    _hover: { bg: "var(--bg-hover)" },
                    "&[data-active=true]": {
                      bg: "var(--bg-hover)",
                      outlineWidth: "2px",
                      outlineStyle: "solid",
                      outlineColor: "primary",
                    },
                  }}
                  style={
                    {
                      "--bg-hover": `color-mix(in srgb, ${resolvedTheme === "light" ? c.light : c.dark} 20%, transparent)`,
                    } as React.CSSProperties
                  }
                  onClick={() => setColor(c.name)}
                >
                  <styled.div
                    css={{ w: "3", h: "3", rounded: "full" }}
                    style={{
                      backgroundColor: resolvedTheme === "light" ? c.light : c.dark,
                    }}
                  />
                  {c.name.charAt(0).toUpperCase() + c.name.slice(1)}
                </Button>
              ))}
            </styled.div>
          </styled.div>
        </styled.div>
      </SheetContent>
    </Sheet>
  );
}
