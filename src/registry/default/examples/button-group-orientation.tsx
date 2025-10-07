import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";

export default function ButtonGroupOrientation() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Media controls" css={{ h: "fit" }}>
      <Button variant="outline" size="icon">
        <LuPlus />
      </Button>
      <Button variant="outline" size="icon">
        <LuMinus />
      </Button>
    </ButtonGroup>
  );
}
