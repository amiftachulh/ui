import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerButton() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", alignItems: "center", gap: "4" }}>
      <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        Processing
      </Button>
    </styled.div>
  );
}
