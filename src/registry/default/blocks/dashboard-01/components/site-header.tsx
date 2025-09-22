import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";
import { SidebarTrigger } from "@/registry/default/ui/sidebar";

export function SiteHeader() {
  return (
    <styled.header
      css={{
        display: "flex",
        h: "var(--header-height)",
        flexShrink: "0",
        alignItems: "center",
        gap: "2",
        borderBottomWidth: "1px",
        transitionProperty: "width,height",
        transitionTimingFunction: "linear",
        ".group-sidebar-wrapper:has[data-collapsible=icon] &": { h: "var(--header-height)" },
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
        <SidebarTrigger css={{ ml: "-1" }} />
        <Separator orientation="vertical" css={{ mx: "2", _vertical: { h: "4" } }} />
        <styled.h1 css={{ textStyle: "md", fontWeight: "medium" }}>Documents</styled.h1>
        <styled.div css={{ ml: "auto", display: "flex", alignItems: "center", gap: "2" }}>
          <Button
            variant="ghost"
            asChild
            size="sm"
            css={{ display: "none", sm: { display: "flex" } }}
          >
            <styled.a
              href="https://github.com/amiftachulh/ui/tree/main/src/registry/default/blocks/dashboard-01"
              rel="noopener noreferrer"
              target="_blank"
              css={{ _dark: { color: "fg" } }}
            >
              GitHub
            </styled.a>
          </Button>
        </styled.div>
      </styled.div>
    </styled.header>
  );
}
