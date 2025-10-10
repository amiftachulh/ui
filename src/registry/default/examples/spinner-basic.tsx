import { styled } from "styled-system/jsx";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerBasic() {
  return (
    <styled.div
      css={{
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8",
      }}
    >
      <Spinner />
    </styled.div>
  );
}
