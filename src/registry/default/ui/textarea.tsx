import { styled } from "styled-system/jsx";
import { textarea } from "styled-system/recipes";

const Textarea = styled("textarea", textarea, {
  defaultProps: {
    "data-slot": "textarea",
  },
});
Textarea.displayName = "Textarea";

export { Textarea };
