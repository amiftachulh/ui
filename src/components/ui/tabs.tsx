"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";

const classes = tabs();

const Root = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const Tabs = styled(Root);

const List = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cx(classes.list, className)} {...props} />
);
const TabsList = styled(List);

const Trigger = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const TabsTrigger = styled(Trigger);

const Content = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cx(classes.content, className)} {...props} />
);
const TabsContent = styled(Content);

export { Tabs, TabsList, TabsTrigger, TabsContent };
