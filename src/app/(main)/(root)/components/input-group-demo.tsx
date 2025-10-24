import { LuArrowUp, LuSearch } from "react-icons/lu";
import { TbCheck, TbInfoCircle, TbPlus } from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";
import { Separator } from "@/registry/default/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function InputGroupDemo() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <LuSearch />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" css={{ pl: "1!" }} />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton css={{ rounded: "full" }} size="icon-xs" aria-label="Info">
                <TbInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            css={{ rounded: "full" }}
            size="icon-xs"
            aria-label="Add"
          >
            <TbPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText css={{ ml: "auto" }}>52% used</InputGroupText>
          <Separator orientation="vertical" css={{ h: "4!" }} />
          <InputGroupButton variant="primary" css={{ rounded: "full" }} size="icon-xs">
            <LuArrowUp />
            <styled.span css={{ srOnly: true }}>Send</styled.span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <styled.div
            css={{
              bg: "primary",
              color: "fg",
              display: "flex",
              w: "4",
              h: "4",
              alignItems: "center",
              justifyContent: "center",
              rounded: "full",
            }}
          >
            <TbCheck className={css({ w: "3", h: "3", color: "primary.fg" })} />
          </styled.div>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
