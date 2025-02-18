import { cx } from "styled-system/css";
import { input, type InputVariantProps } from "styled-system/recipes";

type InputProps = Omit<React.ComponentProps<"input">, "size"> & InputVariantProps;

const Input = ({ size, className, ...props }: InputProps) => (
  <input className={cx(input({ size }), className)} {...props} />
);
Input.displayName = "Input";

export { Input };
