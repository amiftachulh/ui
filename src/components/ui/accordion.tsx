import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css, cx } from "styled-system/css";
import { accordion } from "styled-system/recipes";

const classes = accordion();

const Accordion = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) => (
  <AccordionPrimitive.Root className={cx(classes.root, className)} {...props} />
);
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cx(classes.item, className)} {...props} />
);
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className={classes.header}>
    <AccordionPrimitive.Trigger className={cx(classes.trigger, className)} {...props}>
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
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content className={cx(classes.content, className)} {...props}>
    <div className={css({ pb: "4", pt: "0" })}>{children}</div>
  </AccordionPrimitive.Content>
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
