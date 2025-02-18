import { cx } from "styled-system/css";
import { chip, type ChipVariantProps } from "styled-system/recipes";

type ChipProps = React.ComponentProps<"span"> & ChipVariantProps;

const Chip = ({ variant, size, className, ...props }: ChipProps) => (
  <span className={cx(chip({ variant, size }), className)} {...props} />
);
Chip.displayName = "Chip";

export { Chip };
