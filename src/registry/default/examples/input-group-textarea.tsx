import { TbBrandJavascript, TbCopy, TbCornerDownLeft, TbRefresh } from "react-icons/tb";
import { styled } from "styled-system/jsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/default/ui/input-group";

export default function InputGroupTextareaExample() {
  return (
    <styled.div css={{ display: "grid", w: "full", maxW: "md", gap: "4" }}>
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          css={{ minH: "200px" }}
        />
        <InputGroupAddon align="block-end" css={{ borderTopWidth: "1px" }}>
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" css={{ ml: "auto" }}>
            Run <TbCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" css={{ borderBottomWidth: "1px" }}>
          <InputGroupText css={{ fontFamily: "mono", fontWeight: "medium" }}>
            <TbBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton css={{ ml: "auto" }} size="icon-xs">
            <TbRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <TbCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </styled.div>
  );
}
