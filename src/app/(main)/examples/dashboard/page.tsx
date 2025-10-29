import Image from "next/image";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { SidebarInset, SidebarProvider } from "@/registry/default/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { ChartAreaInteractive } from "./components/chart-area-interactive";
import { DataTable } from "./components/data-table";
import { SectionCards } from "./components/section-cards";
import { SiteHeader } from "./components/site-header";
import data from "./data.json";

export default function Page() {
  return (
    <>
      <styled.div css={{ md: { display: "none" } }}>
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={843}
          alt="Dashboard"
          className={css({ display: "block", _dark: { display: "none" } })}
          priority
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={843}
          alt="Dashboard"
          className={css({ display: "none", _dark: { display: "block" } })}
          priority
        />
      </styled.div>
      <SidebarProvider
        css={{ display: "none", md: { display: "flex" } }}
        style={
          {
            "--header-height": "3rem",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="sidebar" />
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
    </>
  );
}
