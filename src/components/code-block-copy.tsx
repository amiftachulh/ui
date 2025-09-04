"use client";

import { useState } from "react";
import { LuCheck, LuClipboard } from "react-icons/lu";
import { css } from "styled-system/css";
import { Button } from "@/registry/default/ui/button";

type CodeCopyButtonProps = {
  code: string;
};

export default function CodeBlockCopy({ code }: CodeCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="ghost"
      size="icon"
      css={{
        bg: "zinc.100",
        pos: "absolute",
        top: "3",
        right: "4",
        w: "6",
        h: "6",
        rounded: "sm",
        _dark: { bg: "zinc.900" },
      }}
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      <LuClipboard
        strokeWidth="1.5"
        className={css({ pos: "absolute", transition: "all", scale: copied ? 0 : 1 })}
      />
      <LuCheck
        strokeWidth="1.5"
        className={css({ pos: "absolute", transition: "all", scale: copied ? 1 : 0 })}
      />
    </Button>
  );
}
