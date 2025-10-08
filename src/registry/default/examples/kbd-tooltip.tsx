import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

export default function KbdTooltip() {
  return (
    <styled.div css={{ display: "flex", flexWrap: "wrap", gap: "4" }}>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
              Save Changes <Kbd>S</Kbd>
            </styled.div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <styled.div css={{ display: "flex", alignItems: "center", gap: "2" }}>
              Print Document{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </styled.div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </styled.div>
  );
}
