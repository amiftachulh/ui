import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css, cx } from "styled-system/css";
import { accordion } from "styled-system/recipes";

const classes = accordion();

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cx(classes.item, className)} {...props} />
);

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

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content className={classes.content} {...props}>
    <div className={cx(css({ pb: "4", pt: "0" }), className)}>{children}</div>
  </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
