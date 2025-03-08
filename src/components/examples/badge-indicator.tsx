import { LuBell } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Badge } from "@/components/ui/badge";

export default function BadgeIndicator() {
  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2", flexWrap: "wrap" }}>
      <styled.div css={{ pos: "relative" }}>
        <LuBell className={css({ w: "6", h: "6" })} />
        <Badge
          size="xs"
          css={{
            pos: "absolute",
            top: "-3",
            left: "50%",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          99+
        </Badge>
      </styled.div>
    </styled.div>
  );
}
