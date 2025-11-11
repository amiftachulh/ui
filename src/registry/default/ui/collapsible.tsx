"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { styled } from "styled-system/jsx";

const Collapsible = styled(
  CollapsiblePrimitive.Root,
  {},
  {
    defaultProps: {
      "data-slot": "collapsible",
    },
  }
);
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = styled(
  CollapsiblePrimitive.CollapsibleTrigger,
  {},
  {
    defaultProps: {
      "data-slot": "collapsible-trigger",
    },
  }
);
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName;

const CollapsibleContent = styled(
  CollapsiblePrimitive.CollapsibleContent,
  {},
  {
    defaultProps: {
      "data-slot": "collapsible-content",
    },
  }
);
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
