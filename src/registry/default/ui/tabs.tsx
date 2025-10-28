"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { createStyleContext } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tabs);

const Tabs = withProvider(TabsPrimitive.Root, "root", {
  defaultProps: {
    "data-slot": "tabs",
  } as Partial<React.ComponentProps<typeof TabsPrimitive.Root>>,
});

const TabsList = withContext(TabsPrimitive.List, "list", {
  defaultProps: {
    "data-slot": "tabs-list",
  } as Partial<React.ComponentProps<typeof TabsPrimitive.List>>,
});

const TabsTrigger = withContext(TabsPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "tabs-trigger",
  } as Partial<React.ComponentProps<typeof TabsPrimitive.Trigger>>,
});

const TabsContent = withContext(TabsPrimitive.Content, "content", {
  defaultProps: {
    "data-slot": "tabs-content",
  } as Partial<React.ComponentProps<typeof TabsPrimitive.Content>>,
});

export { Tabs, TabsList, TabsTrigger, TabsContent };
