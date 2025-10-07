import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";

export default function InputGroupTextExample() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" css={{ pl: "0.5!" }} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText css={{ color: "muted.fg", textStyle: "xs" }}>
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
