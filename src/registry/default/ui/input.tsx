import { styled } from "styled-system/jsx";
import { input } from "styled-system/recipes";

const Input = styled("input", input, {
  defaultProps: {
    "data-slot": "input",
  },
});
Input.displayName = "Input";

export { Input };
