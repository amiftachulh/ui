"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";
import { createStyleContext } from "@/lib/style-context";

const { withProvider, withContext } = createStyleContext(tabs);

const Tabs = withProvider(TabsPrimitive.Root, "root");
const TabsList = withContext(TabsPrimitive.List, "list");
const TabsTrigger = withContext(TabsPrimitive.Trigger, "trigger");
const TabsContent = withContext(TabsPrimitive.Content, "content");

export { Tabs, TabsContent, TabsList, TabsTrigger };
