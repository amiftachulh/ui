"use client";

import * as React from "react";
import { LuAudioLines, LuPlus } from "react-icons/lu";
import { Button } from "@/registry/default/ui/button";
import { ButtonGroup } from "@/registry/default/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Add">
          <LuPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup css={{ flex: "1" }}>
        <InputGroup>
          <InputGroupInput
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  data-active={voiceEnabled}
                  css={{
                    "&[data-active=true]": {
                      bg: "primary",
                      color: "primary.fg",
                    },
                  }}
                  aria-pressed={voiceEnabled}
                  size="icon-xs"
                  aria-label="Voice Mode"
                >
                  <LuAudioLines />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
