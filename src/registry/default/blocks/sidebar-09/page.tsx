import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/sidebar-09/components/app-sidebar";
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
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <styled.header
          css={{
            bg: "bg",
            pos: "sticky",
            top: "0",
            display: "flex",
            flexShrink: "0",
            alignItems: "center",
            gap: "2",
            borderBottomWidth: "1px",
            p: "4",
          }}
        >
          <SidebarTrigger css={{ ml: "-1" }} />
          <Separator
            orientation="vertical"
            css={{
              mr: "2",
              _vertical: {
                h: "4",
              },
            }}
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem css={{ display: "none", md: { display: "block" } }}>
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator css={{ display: "none", md: { display: "block" } }} />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </styled.header>
        <styled.div css={{ display: "flex", flex: "1", flexDir: "column", gap: "4", p: "4" }}>
          {Array.from({ length: 24 }).map((_, index) => (
            <styled.div
              key={index}
              css={{ bg: "muted/50", aspectRatio: "16/9", w: "full", h: "12", rounded: "lg" }}
            />
          ))}
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
