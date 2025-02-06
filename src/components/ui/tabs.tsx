"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";
import { createStyleContext } from "@/lib/style-context";

const { withProvider, withContext } = createStyleContext(tabs);

const Tabs = withProvider(styled(TabsPrimitive.Root), "root");
const TabsList = withContext(styled(TabsPrimitive.List), "list");
const TabsTrigger = withContext(styled(TabsPrimitive.Trigger), "trigger");
const TabsContent = withContext(styled(TabsPrimitive.Content), "content");

export { Tabs, TabsContent, TabsList, TabsTrigger };
