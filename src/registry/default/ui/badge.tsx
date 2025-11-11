import { Slot } from "@radix-ui/react-slot";
import { styled } from "styled-system/jsx";
import { badge } from "styled-system/recipes";

function Root({ asChild, ...props }: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  return <Comp data-slot="badge" {...props} />;
}

const Badge = styled(Root, badge);
Badge.displayName = "Badge";

export { Badge };
