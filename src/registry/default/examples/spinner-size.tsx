import { styled } from "styled-system/jsx";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerSize() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "6" }}>
      <Spinner css={{ w: "3", h: "3" }} />
      <Spinner css={{ w: "4", h: "4" }} />
      <Spinner css={{ w: "6", h: "6" }} />
      <Spinner css={{ w: "8", h: "8" }} />
    </styled.div>
  );
}
