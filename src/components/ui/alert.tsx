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
  <div className={cx(classes.root, className)} data-variant={variant} {...props} />
);
const StyledRoot = styled(Root);
StyledRoot.displayName = "Alert";

const Icon = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.icon, className)} data-slot="alert-icon" {...props} />
);
const StyledIcon = styled(Icon);
StyledIcon.displayName = "AlertIcon";

const Content = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.content, className)} data-slot="alert-content" {...props} />
);
const StyledContent = styled(Content);
StyledContent.displayName = "AlertContent";

const Title = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5 className={cx(classes.title, className)} data-slot="alert-title" {...props} />
);
const StyledTitle = styled(Title);
StyledTitle.displayName = "AlertTitle";

const Description = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p className={cx(classes.description, className)} data-slot="alert-description" {...props} />
);
const StyledDescription = styled(Description);
StyledDescription.displayName = "AlertDescription";

const Alert = {
  Root: StyledRoot,
  Icon: StyledIcon,
  Content: StyledContent,
  Title: StyledTitle,
  Description: StyledDescription,
};

export { Alert };
