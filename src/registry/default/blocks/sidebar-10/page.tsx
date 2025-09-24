import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/sidebar-10/components/app-sidebar";
import { NavActions } from "@/registry/default/blocks/sidebar-10/components/nav-actions";
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
          css={{ display: "flex", h: "14", flexShrink: "0", alignItems: "center", gap: "2" }}
        >
          <styled.div css={{ display: "flex", flex: "1", alignItems: "center", gap: "2", px: "3" }}>
            <SidebarTrigger />
            <Separator orientation="vertical" css={{ mr: "2", _vertical: { h: "4" } }} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage css={{ lineClamp: "1" }}>
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </styled.div>
          <styled.div css={{ ml: "auto", px: "3" }}>
            <NavActions />
          </styled.div>
        </styled.header>
        <styled.div
          css={{ display: "flex", flex: "1", flexDir: "column", gap: "4", px: "4", py: "10" }}
        >
          <styled.div
            css={{ bg: "muted/50", mx: "auto", h: "24", w: "full", maxW: "3xl", rounded: "xl" }}
          />
          <styled.div
            css={{ bg: "muted/50", mx: "auto", h: "full", w: "full", maxW: "3xl", rounded: "xl" }}
          />
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
