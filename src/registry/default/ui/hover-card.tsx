"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { createStyleContext } from "styled-system/jsx";
import { hoverCard } from "styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(hoverCard);

const HoverCard = withRootProvider(HoverCardPrimitive.Root);
const HoverCardTrigger = withContext(HoverCardPrimitive.Trigger, "trigger");

function Content({
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return <HoverCardPrimitive.Content align={align} sideOffset={sideOffset} {...props} />;
}
const HoverCardContent = withContext(Content, "content");

export { HoverCard, HoverCardTrigger, HoverCardContent };
