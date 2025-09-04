import { LuAlignCenter, LuAlignJustify, LuAlignLeft, LuAlignRight } from "react-icons/lu";
import { css } from "styled-system/css";
import { ToggleGroup, ToggleGroupItem } from "@/registry/default/ui/toggle-group";

export default function ToggleGroupSingle() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="left" aria-label="Align left">
        <LuAlignLeft className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <LuAlignCenter className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <LuAlignRight className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <LuAlignJustify className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
