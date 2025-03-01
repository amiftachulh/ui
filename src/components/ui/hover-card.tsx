"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { hoverCard } from "styled-system/recipes";

const classes = hoverCard();

const HoverCard = HoverCardPrimitive.Root;

function Trigger(props: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;
}
const HoverCardTrigger = styled(Trigger);
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

function Content({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      data-slot="hover-card-content"
      className={cx(classes.content, className)}
      align={align}
      sideOffset={sideOffset}
      {...props}
    />
  );
}
const HoverCardContent = styled(Content);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
