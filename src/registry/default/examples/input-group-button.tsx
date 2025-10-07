"use client";

import * as React from "react";
import { TbCheck, TbCopy, TbInfoCircle, TbStar } from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/default/ui/input-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

export default function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard();
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <InputGroup>
        <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Copy"
            title="Copy"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn");
            }}
          >
            {isCopied ? <TbCheck /> : <TbCopy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup css={{ rounded: "full" }}>
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupAddon>
              <InputGroupButton variant="secondary" size="icon-xs" css={{ rounded: "full" }}>
                <TbInfoCircle />
              </InputGroupButton>
            </InputGroupAddon>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            css={{ display: "flex", flexDir: "column", gap: "1", rounded: "xl", textStyle: "sm" }}
          >
            <styled.p css={{ fontWeight: "medium" }}>Your connection is not secure.</styled.p>
            <p>You should not enter any sensitive information on this site.</p>
          </PopoverContent>
        </Popover>
        <InputGroupAddon css={{ color: "muted.fg", pl: "1.5" }}>https://</InputGroupAddon>
        <InputGroupInput id="input-secure-19" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton onClick={() => setIsFavorite(!isFavorite)} size="icon-xs">
            <TbStar
              data-favorite={isFavorite}
              className={css({
                "&[data-favorite=true]": {
                  fill: "blue.600",
                  stroke: "blue.600",
                },
              })}
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Type to search..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
