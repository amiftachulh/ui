import { cx } from "styled-system/css";
import { label } from "styled-system/recipes";

const Label = ({ className, ...props }: React.ComponentProps<"label">) => (
  <label className={cx(label(), className)} {...props} />
);
Label.displayName = "Label";

export { Label };
