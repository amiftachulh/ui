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

export default function ButtonGroupInputGroup() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" css={{ rounded: "full" }}>
          <LuPlus />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup css={{ rounded: "full" }}>
          <InputGroupInput
            placeholder={voiceEnabled ? "Record and send audio..." : "Send a message..."}
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  size="icon-xs"
                  data-active={voiceEnabled}
                  css={{
                    rounded: "full",
                    "&[data-active=true]": {
                      bg: "orange.100",
                      color: "orange.700",
                      _dark: {
                        bg: "orange.800",
                        color: "orange.100",
                      },
                    },
                  }}
                  aria-pressed={voiceEnabled}
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
