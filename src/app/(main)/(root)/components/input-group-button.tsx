"use client";

import * as React from "react";
import { TbInfoCircle, TbStar } from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Label } from "@/registry/default/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export function InputGroupButtonExample() {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <Label htmlFor="input-secure-19" css={{ srOnly: true }}>
        Input Secure
      </Label>
      <InputGroup css={{ rounded: "full" }}>
        <InputGroupInput id="input-secure-19" css={{ pl: "0.5!" }} />
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton
                variant="secondary"
                size="icon-xs"
                aria-label="Info"
                css={{ rounded: "full" }}
              >
                <TbInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            alignOffset={10}
            css={{ display: "flex", flexDir: "column", gap: "1", rounded: "xl", textStyle: "sm" }}
          >
            <styled.p css={{ fontWeight: "medium" }}>Your connection is not secure.</styled.p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon css={{ color: "muted.fg", pl: "1!" }}>https://</InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
            aria-label="Favorite"
            css={{ rounded: "full" }}
          >
            <TbStar
              data-favorite={isFavorite}
              className={css({
                "&[data-favorite=true]": {
                  fill: "primary",
                  stroke: "primary",
                },
              })}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
