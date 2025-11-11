import * as TogglePrimitive from "@radix-ui/react-toggle";
import { styled } from "styled-system/jsx";
import { toggle } from "styled-system/recipes";

const Toggle = styled(TogglePrimitive.Root, toggle, {
  defaultProps: {
    "data-slot": "toggle",
  },
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
