import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { hoverCard } from "styled-system/recipes";

const classes = hoverCard();

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = styled(HoverCardPrimitive.Trigger);
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const Content = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) => (
  <HoverCardPrimitive.Content
    className={cx(classes.content, className)}
    align={align}
    sideOffset={sideOffset}
    {...props}
  />
);
const HoverCardContent = styled(Content);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
