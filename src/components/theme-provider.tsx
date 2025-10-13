"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ColorContextState {
  color: string;
  setColor: (color: string) => void;
}

const ColorContext = React.createContext<ColorContextState>({
  color: "neutral",
  setColor: () => {},
});

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [color, setColor] = React.useState(() => {
    const storageColor = typeof window !== "undefined" ? localStorage.getItem("color") : null;
    return storageColor || "neutral";
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", color);
    localStorage.setItem("color", color);
  }, [color]);

  return (
    <ColorContext value={{ color, setColor }}>
      <NextThemesProvider attribute="class" disableTransitionOnChange {...props}>
        {children}
      </NextThemesProvider>
    </ColorContext>
  );
}

export function useColor() {
  const ctx = React.useContext(ColorContext);
  if (ctx === undefined) {
    throw new Error("useColor must be used within a ThemeProvider");
  }
  return ctx;
}
