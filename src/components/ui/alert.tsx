import * as React from "react";
import { cx } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { alert, type AlertVariantProps } from "styled-system/recipes";

const classes = alert();

const Root = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & AlertVariantProps) => (
  <div className={cx(alert({ variant }).root, className)} data-variant={variant} {...props} />
);
const Alert = styled(Root);
Alert.displayName = "Alert";

const Icon = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.icon, className)} data-slot="alert-icon" {...props} />
);
const AlertIcon = styled(Icon);
AlertIcon.displayName = "AlertIcon";

const Content = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.content, className)} data-slot="alert-content" {...props} />
);
const AlertContent = styled(Content);
AlertContent.displayName = "AlertContent";

const Title = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5 className={cx(classes.title, className)} data-slot="alert-title" {...props} />
);
const AlertTitle = styled(Title);
AlertTitle.displayName = "AlertTitle";

const Description = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.description, className)} data-slot="alert-description" {...props} />
);
const AlertDescription = styled(Description);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
