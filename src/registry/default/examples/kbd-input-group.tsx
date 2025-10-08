import { LuSearch } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Kbd } from "@/registry/default/ui/kbd";

export default function KbdInputGroup() {
  return (
    <styled.div css={{ display: "flex", w: "full", maxW: "xs", flexDir: "column", gap: "6" }}>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <LuSearch />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
