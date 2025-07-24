import { LuInfo } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <styled.div css={{ display: "flex", flexWrap: "wrap", alignItems: "start", gap: "4" }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
      <styled.div css={{ display: "flex", gap: "2" }}>
        {["top", "right", "bottom", "left"].map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" css={{ textTransform: "capitalize" }}>
                {side}
              </Button>
            </TooltipTrigger>
            <TooltipContent side={side as "top" | "right" | "bottom" | "left"}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </styled.div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <LuInfo />
            <styled.span css={{ srOnly: true }}>Info</styled.span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          To learn more about how this works, check out the docs. If you have any questions, please
          reach out to us.
        </TooltipContent>
      </Tooltip>
    </styled.div>
  );
}
