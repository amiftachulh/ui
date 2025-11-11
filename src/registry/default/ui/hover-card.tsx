"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { createStyleContext } from "styled-system/jsx";
import { hoverCard } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(hoverCard);

const HoverCard = withRootProvider(HoverCardPrimitive.Root);

const HoverCardTrigger = withContext(HoverCardPrimitive.Trigger, "trigger", {
  defaultProps: {
    "data-slot": "hover-card-trigger",
  },
});

const HoverCardContent = withContext(HoverCardPrimitive.Content, "content", {
  defaultProps: {
    align: "center",
    sideOffset: 4,
    "data-slot": "hover-card-content",
  },
});

export { HoverCard, HoverCardTrigger, HoverCardContent };
