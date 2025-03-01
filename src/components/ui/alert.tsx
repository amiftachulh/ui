import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { alert, type AlertVariantProps } from "styled-system/recipes";

const classes = alert();

function Root({ className, variant, ...props }: React.ComponentProps<"div"> & AlertVariantProps) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      className={cx(alert({ variant }).root, className)}
      {...props}
    />
  );
}
const Alert = styled(Root);
Alert.displayName = "Alert";

function Icon({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="alert-icon" className={cx(classes.icon, className)} {...props} />;
}
const AlertIcon = styled(Icon);
AlertIcon.displayName = "AlertIcon";

function Content({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cx(classes.content, className)} data-slot="alert-content" {...props} />;
}
const AlertContent = styled(Content);
AlertContent.displayName = "AlertContent";

function Title({ className, ...props }: React.ComponentProps<"h5">) {
  return <h5 data-slot="alert-title" className={cx(classes.title, className)} {...props} />;
}
const AlertTitle = styled(Title);
AlertTitle.displayName = "AlertTitle";

function Description({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="alert-description" className={cx(classes.description, className)} {...props} />
  );
}
const AlertDescription = styled(Description);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
