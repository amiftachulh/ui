import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "styled-system/css";
import { tabs } from "styled-system/recipes";

const classes = tabs();

const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={cx(classes.root, className)} {...props} />
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cx(classes.list, className)} {...props} />
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cx(classes.content, className)} {...props} />
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
