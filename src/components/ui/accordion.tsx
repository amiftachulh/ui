"use client";

import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { accordion } from "styled-system/recipes";

const classes = accordion();

function Root({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cx(classes.root, className)}
      {...props}
    />
  );
}
const Accordion = styled(Root);
Accordion.displayName = AccordionPrimitive.Root.displayName;

function Item({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cx(classes.item, className)}
      {...props}
    />
  );
}
const AccordionItem = styled(Item);
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

function Trigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className={classes.header}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cx(classes.trigger, className)}
        {...props}
      >
        {children}
        <LuChevronDown
          className={css({
            w: "4",
            h: "4",
            flexShrink: "0",
            transition: "transform",
            transitionDuration: "normal",
          })}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
const AccordionTrigger = styled(Trigger);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

function Content({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cx(classes.content, className)}
      {...props}
    >
      <div className={css({ pb: "4", pt: "0" })}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
const AccordionContent = styled(Content);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
