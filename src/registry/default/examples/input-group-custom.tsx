"use client";

import { styled } from "styled-system/jsx";
import { InputGroup, InputGroupAddon, InputGroupButton } from "@/registry/default/ui/input-group";

export default function InputGroupCustom() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "sm", gap: "6" }}>
      <InputGroup>
        <styled.textarea
          placeholder="Autoresize textarea..."
          css={{
            display: "flex",
            fieldSizing: "content",
            minH: "16",
            w: "full",
            resize: "none",
            rounded: "md",
            bg: "transparent",
            px: "3",
            py: "2.5",
            textStyle: "md",
            transition: "common",
            outline: "none",
            md: { textStyle: "sm" },
          }}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton css={{ ml: "auto" }} size="sm">
            Submit
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
