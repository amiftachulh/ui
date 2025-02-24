"use client";

import { useLayoutEffect, useState } from "react";
import { packageManagers } from "@/config/package-managers";
import { Tabs } from "./ui/tabs";

type PackageTabsProps = {
  items: React.ReactNode[];
};

export default function PackageTabs({ items }: PackageTabsProps) {
  const [selected, setSelected] = useState(packageManagers[0].name);

  useLayoutEffect(() => {
    setSelected(localStorage.getItem("package-manager") || packageManagers[0].name);
  }, []);

  return (
    <Tabs.Root
      css={{
        my: "4",
        borderWidth: "1",
        rounded: "md",
        overflow: "hidden",
      }}
      value={selected}
      onValueChange={(value) => {
        localStorage.setItem("package-manager", value);
        setSelected(value);
      }}
    >
      <Tabs.List>
        {packageManagers.map((p) => (
          <Tabs.Trigger
            key={p.name}
            css={{
              gap: "2",
              borderRightWidth: "1",
              _hover: {
                bg: "primary/10",
              },
              _active: {
                bg: "primary/10",
              },
            }}
            value={p.name}
          >
            {p.icon} {p.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {packageManagers.map((p, i) => (
        <Tabs.Content key={p.name} css={{ p: "0" }} value={p.name}>
          {items[i]}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
