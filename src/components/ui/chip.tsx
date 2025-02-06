import { styled } from "styled-system/jsx";
import { chip } from "styled-system/recipes";

const Chip = styled(function Chip({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
}, chip);

Chip.displayName = "Chip";

export { Chip };
