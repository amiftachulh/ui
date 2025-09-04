import { LuItalic } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Toggle } from "@/registry/default/ui/toggle";

export default function ToggleSize() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "4" }}>
      <Toggle variant="outline" size="sm" aria-label="Toggle italic">
        <LuItalic className={css({ w: "4", h: "4" })} />
      </Toggle>
      <Toggle variant="outline" size="md" aria-label="Toggle italic">
        <LuItalic className={css({ w: "4", h: "4" })} />
      </Toggle>
      <Toggle variant="outline" size="lg" aria-label="Toggle italic">
        <LuItalic className={css({ w: "4", h: "4" })} />
      </Toggle>
    </styled.div>
  );
}
