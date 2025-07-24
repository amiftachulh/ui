import { LuBadgeCheck } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <styled.div css={{ display: "flex", flexDir: "column", alignItems: "center", gap: "2" }}>
      <styled.div css={{ display: "flex", w: "full", flexWrap: "wrap", gap: "2" }}>
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="outline">Outline</Badge>
      </styled.div>
      <styled.div css={{ display: "flex", w: "full", flexWrap: "wrap", gap: "2" }}>
        <Badge
          variant="secondary"
          css={{ bg: "blue.500", color: "white", _dark: { bg: "blue.600" } }}
        >
          <LuBadgeCheck />
          Verified
        </Badge>
        <Badge
          css={{
            minW: "5",
            h: "5",
            rounded: "full",
            px: "1",
            fontFamily: "mono",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          8
        </Badge>
        <Badge
          css={{
            minW: "5",
            h: "5",
            rounded: "full",
            px: "1",
            fontFamily: "mono",
            fontVariantNumeric: "tabular-nums",
          }}
          variant="danger"
        >
          99
        </Badge>
        <Badge
          css={{
            minW: "5",
            h: "5",
            rounded: "full",
            px: "1",
            fontFamily: "mono",
            fontVariantNumeric: "tabular-nums",
          }}
          variant="outline"
        >
          20+
        </Badge>
      </styled.div>
    </styled.div>
  );
}
