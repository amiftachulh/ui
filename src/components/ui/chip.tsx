import { cx, type RecipeVariantProps } from "styled-system/css";
import { chip } from "styled-system/recipes";

const Chip = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> & RecipeVariantProps<typeof chip>) => (
  <span className={cx(chip({ variant, size }), className)} {...props} />
);

export { Chip };
