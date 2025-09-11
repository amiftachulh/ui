"use client";

import { useLayoutEffect, useState } from "react";
import { Tabs } from "@/registry/default/ui/tabs";

export function InstallationTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [selected, setSelected] = useState("cli");

  useLayoutEffect(() => {
    setSelected(localStorage.getItem("installation-type") || "cli");
  }, []);

  return (
    <Tabs
      value={selected}
      onValueChange={(value) => {
        setSelected(value);
        localStorage.setItem("installation-type", value);
      }}
    >
      {children}
    </Tabs>
  );
}
