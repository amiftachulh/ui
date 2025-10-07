import { LuLoaderCircle } from "react-icons/lu";
import { styled } from "styled-system/jsx";

const Spinner = styled(
  LuLoaderCircle,
  {
    base: {
      w: "4",
      h: "4",
      animation: "spin",
    },
  },
  {
    defaultProps: {
      role: "status",
      "aria-label": "Loading",
    },
  }
);

export { Spinner };
