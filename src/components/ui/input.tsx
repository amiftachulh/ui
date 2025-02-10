import * as React from "react";
import { cx } from "styled-system/css";
import { input, type InputVariantProps } from "styled-system/recipes";

const Input = ({
  className,
  size,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & InputVariantProps) => (
  <input className={cx(input({ size }), className)} {...props} />
);

export { Input };
