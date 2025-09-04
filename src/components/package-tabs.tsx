"use client";

import { useLayoutEffect, useState } from "react";
import { packageManagers } from "@/config/package-managers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

type PackageTabsProps = {
  items: React.ReactNode[];
};

export default function PackageTabs({ items }: PackageTabsProps) {
  const [selected, setSelected] = useState(packageManagers[0].name);

  useLayoutEffect(() => {
    setSelected(localStorage.getItem("package-manager") || packageManagers[0].name);
  }, []);

  return (
    <Tabs
      value={selected}
      onValueChange={(value: string) => {
        localStorage.setItem("package-manager", value);
        setSelected(value);
      }}
      css={{
        my: "4",
        borderWidth: "1",
        rounded: "md",
        overflow: "hidden",
      }}
    >
      <TabsList>
        {packageManagers.map((p) => (
          <TabsTrigger
            key={p.name}
            value={p.name}
            css={{
              gap: "2",
              borderRightWidth: "1",
              _hover: { bg: "primary/10" },
              _active: { bg: "primary/10" },
            }}
          >
            {p.icon} {p.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {packageManagers.map((p, i) => (
        <TabsContent key={p.name} value={p.name} css={{ p: "0" }}>
          {items[i]}
        </TabsContent>
      ))}
    </Tabs>
  );
}
