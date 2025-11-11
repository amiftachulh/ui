import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { styled } from "styled-system/jsx";
import { separator } from "styled-system/recipes";

const Separator = styled(SeparatorPrimitive.Root, separator, {
  defaultProps: {
    "data-slot": "separator",
  },
});
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
