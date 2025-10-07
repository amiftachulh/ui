import { LuInfo } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

export default function InputGroupLabel() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "4" }}>
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" css={{ color: "fg" }}>
            Email
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                css={{ ml: "auto", rounded: "full" }}
                size="icon-xs"
              >
                <LuInfo />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
