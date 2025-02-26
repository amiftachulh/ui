import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { css, cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { accordion } from "styled-system/recipes";

const classes = accordion();

const Root = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) => (
  <AccordionPrimitive.Root className={cx(classes.root, className)} {...props} />
);
const Accordion = styled(Root);
Accordion.displayName = AccordionPrimitive.Root.displayName;

const Item = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cx(classes.item, className)} {...props} />
);
const AccordionItem = styled(Item);
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const Trigger = ({
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
const AccordionTrigger = styled(Trigger);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content className={cx(classes.content, className)} {...props}>
    <styled.div css={{ pb: "4", pt: "0" }}>{children}</styled.div>
  </AccordionPrimitive.Content>
);
const AccordionContent = styled(Content);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
