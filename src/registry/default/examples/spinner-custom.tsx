import { LuLoader } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { spinner } from "styled-system/recipes";

const Spinner = styled(LuLoader, spinner, {
  defaultProps: {
    role: "status",
    "aria-label": "Loading",
  },
});

export default function SpinnerCustom() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      <Spinner />
    </styled.div>
  );
}
