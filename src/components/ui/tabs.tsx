import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { tabs } from "styled-system/recipes";

const classes = tabs();

const Root = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const StyledRoot = styled(Root);
StyledRoot.displayName = TabsPrimitive.Root.displayName;

const List = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List className={cx(classes.list, className)} {...props} />
);
const StyledList = styled(List);
StyledList.displayName = TabsPrimitive.List.displayName;

const Trigger = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger className={cx(classes.trigger, className)} {...props} />
);
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cx(classes.content, className)} {...props} />
);
const StyledContent = styled(Content);
StyledContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = {
  Root: StyledRoot,
  List: StyledList,
  Trigger: StyledTrigger,
  Content: StyledContent,
};

export { Tabs };
