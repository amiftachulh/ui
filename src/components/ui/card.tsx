import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { card } from "styled-system/recipes";

const classes = card();

const Card = styled(function Root({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cx(classes.root, className)} {...props} />;
});
Card.displayName = "Card";

const CardHeader = styled(function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cx(classes.header, className)} {...props} />;
});
CardHeader.displayName = "CardHeader";

const CardTitle = styled(function Title({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cx(classes.title, className)} {...props} />;
});
CardTitle.displayName = "CardTitle";

const CardDescription = styled(function Description({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-description" className={cx(classes.description, className)} {...props} />
  );
});
CardDescription.displayName = "CardDescription";

const CardContent = styled(function Content({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cx(classes.content, className)} {...props} />;
});
CardContent.displayName = "CardContent";

const CardFooter = styled(function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cx(classes.footer, className)} {...props} />;
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
