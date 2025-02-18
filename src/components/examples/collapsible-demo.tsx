"use client";

import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import { css } from "styled-system/css";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={css({ w: "350px", spaceY: 2 })}>
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4",
          px: "4",
        })}
      >
        <h4 className={css({ textStyle: "sm", fontWeight: "semibold" })}>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className={css({ w: "9", p: "0" })}>
            <LuChevronsUpDown className={css({ w: "4", h: "4" })} />
            <span className={css({ srOnly: true })}>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div
        className={css({
          rounded: "md",
          borderWidth: "1px",
          px: "4",
          py: "3",
          fontFamily: "mono",
          textStyle: "sm",
        })}
      >
        @radix-ui/primitives
      </div>
      <CollapsibleContent className={css({ spaceY: "2" })}>
        <div
          className={css({
            rounded: "md",
            borderWidth: "1px",
            px: "4",
            py: "3",
            fontFamily: "mono",
            textStyle: "sm",
          })}
        >
          @radix-ui/colors
        </div>
        <div
          className={css({
            rounded: "md",
            borderWidth: "1px",
            px: "4",
            py: "3",
            fontFamily: "mono",
            textStyle: "sm",
          })}
        >
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
