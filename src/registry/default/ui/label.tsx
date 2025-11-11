import { styled } from "styled-system/jsx";
import { label } from "styled-system/recipes";

const Label = styled("label", label, {
  defaultProps: {
    "data-slot": "label",
  },
});
Label.displayName = "Label";

export { Label };
