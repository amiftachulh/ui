import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { emptyState } from "styled-system/recipes";

const classes = emptyState();

function Root({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.root, className)} {...props} />;
}
const EmptyState = styled(Root);
EmptyState.displayName = "EmptyState";

function Indicator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.indicator, className)} {...props} />;
}
const EmptyStateIndicator = styled(Indicator);
EmptyStateIndicator.displayName = "EmptyStateIndicator";

function Content({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.content, className)} {...props} />;
}
const EmptyStateContent = styled(Content);
EmptyStateContent.displayName = "EmptyStateContent";

function Title({
  className,
  asChild,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";
  return <Comp className={cx(classes.title, className)} {...props} />;
}
const EmptyStateTitle = styled(Title);
EmptyStateTitle.displayName = "EmptyStateTitle";

function Description({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cx(classes.description, className)} {...props} />;
}
const EmptyStateDescription = styled(Description);
EmptyStateDescription.displayName = "EmptyStateDescription";

function Actions({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.actions, className)} {...props} />;
}
const EmptyStateActions = styled(Actions);
EmptyStateActions.displayName = "EmptyStateActions";

export {
  EmptyState,
  EmptyStateIndicator,
  EmptyStateContent,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateActions,
};
