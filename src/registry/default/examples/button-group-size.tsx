import { LuPlus } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";

export default function ButtonGroupSize() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", alignItems: "flex-start", gap: "8" }}>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="icon-sm">
          <LuPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <LuPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="icon-lg">
          <LuPlus />
        </Button>
      </ButtonGroup>
    </styled.div>
  );
}
