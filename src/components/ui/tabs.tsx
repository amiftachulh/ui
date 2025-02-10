import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "styled-system/css";
import { tabs } from "styled-system/recipes";

const classes = tabs();

const Tabs = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={cx(classes.root, className)} {...props} />
);

const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cx(classes.list, className)} {...props} />
);

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);

const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cx(classes.content, className)} {...props} />
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
