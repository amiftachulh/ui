import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/sidebar-12/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/default/ui/breadcrumb";
import { Separator } from "@/registry/default/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/registry/default/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <styled.header
          css={{
            bg: "bg",
            pos: "sticky",
            top: "0",
            display: "flex",
            h: "16",
            flexShrink: "0",
            alignItems: "center",
            gap: "2",
            borderBottomWidth: "1px",
            px: "4",
          }}
        >
          <SidebarTrigger css={{ ml: "-1" }} />
          <Separator orientation="vertical" css={{ mr: "2", _vertical: { h: "4" } }} />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </styled.header>
        <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "4", p: "4" }}>
          <styled.div
            css={{
              display: "grid",
              gridAutoRows: "min",
              gap: "4",
              md: { gridTemplateColumns: "repeat(5, minmax(0, 1fr))" },
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <styled.div key={i} css={{ bg: "muted/50", aspectRatio: "square", rounded: "xl" }} />
            ))}
          </styled.div>
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
