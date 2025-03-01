"use client";

import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} w="350px" spaceY="2">
      <styled.div display="flex" alignItems="center" justifyContent="space-between" gap="4" px="4">
        <styled.h4 textStyle="sm" fontWeight="semibold">
          @peduarte starred 3 repositories
        </styled.h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" w="9" p="0">
            <LuChevronsUpDown className={css({ w: "4", h: "4" })} />
            <styled.span srOnly>Toggle</styled.span>
          </Button>
        </CollapsibleTrigger>
      </styled.div>
      <styled.div rounded="md" borderWidth="1px" px="4" py="3" fontFamily="mono" textStyle="sm">
        @radix-ui/primitives
      </styled.div>
      <CollapsibleContent spaceY="2">
        <styled.div rounded="md" borderWidth="1px" px="4" py="3" fontFamily="mono" textStyle="sm">
          @radix-ui/colors
        </styled.div>
        <styled.div rounded="md" borderWidth="1px" px="4" py="3" fontFamily="mono" textStyle="sm">
          @stitches/react
        </styled.div>
      </CollapsibleContent>
    </Collapsible>
  );
}
