import { cx } from "styled-system/css";
import { alert, type AlertVariantProps } from "styled-system/recipes";

const classes = alert();

const Alert = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & AlertVariantProps) => (
  <div className={cx(alert({ variant }).root, className)} data-variant={variant} {...props} />
);
Alert.displayName = "Alert";

const AlertIcon = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span className={cx(classes.icon, className)} data-slot="alert-icon" {...props} />
);
AlertIcon.displayName = "AlertIcon";

const AlertContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cx(classes.content, className)} data-slot="alert-content" {...props} />
);
AlertContent.displayName = "AlertContent";

const AlertTitle = ({ className, ...props }: React.ComponentProps<"h5">) => (
  <h5 className={cx(classes.title, className)} data-slot="alert-title" {...props} />
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p className={cx(classes.description, className)} data-slot="alert-description" {...props} />
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
