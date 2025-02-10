import * as React from "react";
import { cx } from "styled-system/css";
import { alert, type AlertVariantProps } from "styled-system/recipes";

const classes = alert();

const Alert = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & AlertVariantProps) => {
  const classes = alert({ variant });
  return <div className={cx(classes.root, className)} {...props} />;
};

const AlertTitle = ({ className, ...props }: React.ComponentProps<"h2">) => (
  <h5 className={cx(classes.title, className)} {...props} />
);

const AlertDescription = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p className={cx(classes.description, className)} {...props} />
);

export { Alert, AlertTitle, AlertDescription };
