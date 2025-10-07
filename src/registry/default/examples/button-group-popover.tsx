import { LuBot, LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { Separator } from "@/registry/default/ui/separator";
import { Textarea } from "@/registry/default/ui/textarea";

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <LuBot /> Copilot
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open Popover">
            <LuChevronDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" css={{ rounded: "xl", p: "0", textStyle: "sm" }}>
          <styled.div css={{ px: "4", py: "3" }}>
            <styled.div css={{ textStyle: "sm", fontWeight: "medium" }}>Agent Tasks</styled.div>
          </styled.div>
          <Separator />
          <styled.div css={{ p: "4", textStyle: "sm", "& > p:not(:last-child)": { mb: "2" } }}>
            <Textarea
              placeholder="Describe your task in natural language."
              css={{ mb: "4", resize: "none" }}
            />
            <styled.p css={{ fontWeight: "medium" }}>Start a new task with Copilot</styled.p>
            <styled.p css={{ color: "muted.fg" }}>
              Describe your task in natural language. Copilot will work in the background and open a
              pull request for your review.
            </styled.p>
          </styled.div>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  );
}
