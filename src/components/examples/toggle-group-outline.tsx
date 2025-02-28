import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";
import { css } from "styled-system/css";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup variant="outline" type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <LuBold className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <LuItalic className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <LuUnderline className={css({ w: "4", h: "4" })} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
