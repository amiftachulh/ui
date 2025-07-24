import { Slot } from "@radix-ui/react-slot";
import { styled } from "styled-system/jsx";
import { badge } from "styled-system/recipes";

interface BadgeProps extends React.ComponentProps<"span"> {
  asChild?: boolean;
}

function Root({ asChild, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";
  return <Comp {...props} />;
}

const Badge = styled(Root, badge);
Badge.displayName = "Badge";

export { Badge };
