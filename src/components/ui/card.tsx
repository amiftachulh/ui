import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { card } from "styled-system/recipes";

const classes = card();

function Root({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cx(classes.root, className)} {...props} />;
}
const Card = styled(Root);
Card.displayName = "Card";

function Header({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cx(classes.header, className)} {...props} />;
}
const CardHeader = styled(Header);
CardHeader.displayName = "CardHeader";

function Title({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={cx(classes.title, className)} {...props} />;
}
const CardTitle = styled(Title);
CardTitle.displayName = "CardTitle";

function Description({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-description" className={cx(classes.description, className)} {...props} />
  );
}
const CardDescription = styled(Description);
CardDescription.displayName = "CardDescription";

function Content({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cx(classes.content, className)} {...props} />;
}
const CardContent = styled(Content);
CardContent.displayName = "CardContent";

function Footer({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cx(classes.footer, className)} {...props} />;
}
const CardFooter = styled(Footer);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
