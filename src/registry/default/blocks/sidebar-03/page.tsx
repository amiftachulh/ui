import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/sidebar-03/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
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
            display: "flex",
            h: "16",
            flexShrink: "0",
            alignItems: "center",
            gap: "2",
            borderBottomWidth: "1px",
          }}
        >
          <styled.div css={{ display: "flex", alignItems: "center", gap: "2", px: "3" }}>
            <SidebarTrigger />
            <Separator orientation="vertical" css={{ mr: "2", h: "4" }} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem css={{ display: "none", md: { display: "block" } }}>
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator css={{ display: "none", md: { display: "block" } }} />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </styled.div>
        </styled.header>
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
            css={{ bg: "muted/50", minH: "100vh", flex: "1", rounded: "xl", md: { minH: "min" } }}
          />
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
