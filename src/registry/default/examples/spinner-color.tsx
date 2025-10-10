import { styled } from "styled-system/jsx";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerColor() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "6" }}>
      <Spinner css={{ w: "6", h: "6", color: "red.500" }} />
      <Spinner css={{ w: "6", h: "6", color: "green.500" }} />
      <Spinner css={{ w: "6", h: "6", color: "blue.500" }} />
      <Spinner css={{ w: "6", h: "6", color: "yellow.500" }} />
      <Spinner css={{ w: "6", h: "6", color: "purple.500" }} />
    </styled.div>
  );
}
