"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { styled } from "styled-system/jsx";

const Collapsible = styled(CollapsiblePrimitive.Root);
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = styled(CollapsiblePrimitive.CollapsibleTrigger);
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = styled(CollapsiblePrimitive.CollapsibleContent);
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
