import { LuItalic } from "react-icons/lu";
import { css } from "styled-system/css";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <LuItalic className={css({ w: "4", h: "4" })} />
    </Toggle>
  );
}
