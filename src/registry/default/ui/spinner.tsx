import { LuLoaderCircle } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { spinner } from "styled-system/recipes";

const Spinner = styled(LuLoaderCircle, spinner, {
  defaultProps: {
    role: "status",
    "aria-label": "Loading",
  },
});

export { Spinner };
