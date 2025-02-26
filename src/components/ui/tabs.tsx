import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";

const classes = tabs();

const Root = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const Tabs = styled(Root);
Tabs.displayName = TabsPrimitive.Root.displayName;

const List = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cx(classes.list, className)} {...props} />
);
const TabsList = styled(List);
TabsList.displayName = TabsPrimitive.List.displayName;

const Trigger = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const TabsTrigger = styled(Trigger);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cx(classes.content, className)} {...props} />
);
const TabsContent = styled(Content);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
