import { LuArrowUp } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import { Spinner } from "@/registry/default/ui/spinner";

export default function SpinnerInputGroup() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "md", flexDir: "column", gap: "4" }}>
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton css={{ ml: "auto" }} variant="primary">
            <LuArrowUp />
            <styled.span css={{ srOnly: true }}>Send</styled.span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
