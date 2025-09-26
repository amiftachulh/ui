"use client";

import * as React from "react";
import { LuCheck, LuClipboard } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/registry/default/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/default/ui/tooltip";

export function ChartCopyButton({
  code,
  css,
  ...props
}: {
  code: string;
} & React.ComponentProps<typeof Button>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          css={{
            w: "7",
            h: "7",
            rounded: "6px",
            "& > svg": {
              w: "3.5",
              h: "3.5",
            },
            ...css,
          }}
          onClick={() => {
            copyToClipboard(code);
          }}
          {...props}
        >
          <styled.span css={{ srOnly: true }}>Copy</styled.span>
          {isCopied ? <LuCheck /> : <LuClipboard />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy code</TooltipContent>
    </Tooltip>
  );
}
