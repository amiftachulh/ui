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
const StyledRoot = styled(Root);
StyledRoot.displayName = AccordionPrimitive.Root.displayName;

const Item = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cx(classes.item, className)} {...props} />
);
const StyledItem = styled(Item);
StyledItem.displayName = AccordionPrimitive.Item.displayName;

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
const StyledTrigger = styled(Trigger);
StyledTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content className={cx(classes.content, className)} {...props}>
    <div className={css({ pb: "4", pt: "0" })}>{children}</div>
  </AccordionPrimitive.Content>
);
const StyledContent = styled(Content);
StyledContent.displayName = AccordionPrimitive.Content.displayName;

const Accordion = {
  Root: StyledRoot,
  Item: StyledItem,
  Trigger: StyledTrigger,
  Content: StyledContent,
};

export { Accordion };
