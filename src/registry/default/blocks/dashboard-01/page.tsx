import { styled } from "styled-system/jsx";
import { AppSidebar } from "@/registry/default/blocks/dashboard-01/components/app-sidebar";
import { ChartAreaInteractive } from "@/registry/default/blocks/dashboard-01/components/chart-area-interactive";
import { DataTable } from "@/registry/default/blocks/dashboard-01/components/data-table";
import { SectionCards } from "@/registry/default/blocks/dashboard-01/components/section-cards";
import { SiteHeader } from "@/registry/default/blocks/dashboard-01/components/site-header";
import { SidebarInset, SidebarProvider } from "@/registry/default/ui/sidebar";
import data from "./data.json";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--header-height": "3rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <styled.div css={{ display: "flex", flex: "1", flexDir: "column" }}>
          <styled.div
            css={{
              containerName: "main",
              containerType: "inline-size",
              display: "flex",
              flex: "1",
              flexDir: "column",
              gap: "2",
            }}
          >
            <styled.div
              css={{
                display: "flex",
                flexDir: "column",
                gap: "4",
                py: "4",
                md: { gap: "6", py: "6" },
              }}
            >
              <SectionCards />
              <styled.div css={{ px: "4", lg: { px: "6" } }}>
                <ChartAreaInteractive />
              </styled.div>
              <DataTable data={data} />
            </styled.div>
          </styled.div>
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
