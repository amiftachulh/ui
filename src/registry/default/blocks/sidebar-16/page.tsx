import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/sidebar-16/components/app-sidebar";
import { SiteHeader } from "@/registry/default/blocks/sidebar-16/components/site-header";
import { SidebarInset, SidebarProvider } from "@/registry/default/ui/sidebar";

export const iframeHeight = "800px";

export const description = "A sidebar with a header and a search form.";

export default function Page() {
  return (
    <styled.div
      css={{
        "--header-height": "3.5rem",
      }}
    >
      <SidebarProvider css={{ display: "flex", flexDir: "column" }}>
        <SiteHeader />
        <styled.div css={{ display: "flex", flex: "1" }}>
          <AppSidebar />
          <SidebarInset>
            <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "4", p: "4" }}>
              <styled.div
                css={{
                  display: "grid",
                  gridAutoRows: "min",
                  gap: "4",
                  md: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
                }}
              >
                <styled.div css={{ bg: "muted/50", aspectRatio: "16/9", rounded: "xl" }} />
                <styled.div css={{ bg: "muted/50", aspectRatio: "16/9", rounded: "xl" }} />
                <styled.div css={{ bg: "muted/50", aspectRatio: "16/9", rounded: "xl" }} />
              </styled.div>
              <styled.div
                css={{
                  bg: "muted/50",
                  minH: "100vh",
                  flex: "1",
                  rounded: "xl",
                  md: { minH: "min" },
                }}
              />
            </styled.div>
          </SidebarInset>
        </styled.div>
      </SidebarProvider>
    </styled.div>
  );
}
