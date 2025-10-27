import { TbCirclePlusFilled } from "react-icons/tb";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";

export function SiteHeader() {
  return (
    <styled.header
      css={{
        pos: "sticky",
        bg: "bg/90",
        top: "0",
        zIndex: "10",
        display: "flex",
        h: "var(--header-height)",
        flexShrink: "0",
        alignItems: "center",
        gap: "2",
        borderBottomWidth: "1px",
        transitionProperty: "width, height",
        transitionDuration: "fast",
        transitionTimingFunction: "linear",
        ".group-sidebar-wrapper:has([data-collapsible=icon]) &": {
          h: "var(--header-height)",
        },
      }}
    >
      <styled.div
        css={{
          display: "flex",
          w: "full",
          alignItems: "center",
          gap: "1",
          px: "4",
          lg: { gap: "2", px: "6" },
        }}
      >
        <styled.h1 css={{ textStyle: "md", fontWeight: "medium" }}>Documents</styled.h1>
        <styled.div css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2" }}>
          <Button size="sm" css={{ display: "none", h: "7", sm: { display: "flex" } }}>
            <TbCirclePlusFilled />
            <span>Quick Create</span>
          </Button>
        </styled.div>
      </styled.div>
    </styled.header>
  );
}
