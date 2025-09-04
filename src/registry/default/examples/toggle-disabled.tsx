import { LuUnderline } from "react-icons/lu";
import { css } from "styled-system/css";
import { Toggle } from "@/registry/default/ui/toggle";

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle underline" disabled>
      <LuUnderline className={css({ w: "4", h: "4" })} />
    </Toggle>
  );
}
