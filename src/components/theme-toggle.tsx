"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { Button } from "@/registry/default/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon"
      css={{ flexShrink: "0" }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
    >
      {isClient ? theme === "dark" ? <LuMoon /> : <LuSun /> : null}
    </Button>
  );
}
