import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { styled } from "styled-system/jsx";

const Root = styled(CollapsiblePrimitive.Root);
Root.displayName = CollapsiblePrimitive.Root.displayName;

const Trigger = styled(CollapsiblePrimitive.CollapsibleTrigger);
Trigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const Content = styled(CollapsiblePrimitive.CollapsibleContent);
Content.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

const Collapsible = {
  Root,
  Trigger,
  Content,
};

export { Collapsible };
