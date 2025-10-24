"use client";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon-sm" aria-label="Previous">
          <LuArrowLeft />
        </Button>
        <Button variant="outline" size="icon-sm" aria-label="Next">
          <LuArrowRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
