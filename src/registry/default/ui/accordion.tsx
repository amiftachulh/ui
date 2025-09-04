"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css } from "styled-system/css";
import { accordion } from "styled-system/recipes";
import { createStyleContext } from "@/registry/default/lib/create-style-context";

const { withProvider, withContext } = createStyleContext(accordion);

const AccordionHeader = withContext(AccordionPrimitive.Header, "header");

function Trigger({ children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionHeader>
      <AccordionPrimitive.Trigger {...props}>
        {children}
        <LuChevronDown
          className={css({
            flexShrink: "0",
            w: "4",
            h: "4",
            color: "muted.fg",
            transform: "translateY(0.125rem)",
            transition: "transform",
            transitionDuration: "normal",
            pointerEvents: "none",
            "[data-state=open] &": {
              transform: "translateY(0.125rem) rotate(180deg)",
            },
          })}
        />
      </AccordionPrimitive.Trigger>
    </AccordionHeader>
  );
}

function Content({ children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content {...props}>
      <div className={css({ pt: "0", pb: "4" })}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

const Accordion = withProvider(AccordionPrimitive.Root, "root");
const AccordionItem = withContext(AccordionPrimitive.Item, "item");
const AccordionTrigger = withContext(Trigger, "trigger");
const AccordionContent = withContext(Content, "content");

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
