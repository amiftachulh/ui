import { LuLink2 } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { ButtonGroup, ButtonGroupText } from "@/registry/default/ui/button-group";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";

export default function InputGroupButtonGroup() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <LuLink2 />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </styled.div>
  );
}
