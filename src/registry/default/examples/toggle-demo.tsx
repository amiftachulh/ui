import { LuBold } from "react-icons/lu";
import { css } from "styled-system/css";
import { Toggle } from "@/registry/default/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <LuBold className={css({ w: "4", h: "4" })} />
    </Toggle>
  );
}
