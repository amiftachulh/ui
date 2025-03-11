"use client";

import { LuChevronDown } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    css={{
                      _open: {
                        bg: "sidebar.accent",
                        color: "sidebar.accent.fg",
                      },
                    }}
                  >
                    Select Workspace
                    <LuChevronDown className={css({ ml: "auto" })} />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent css={{ w: "var(--radix-popper-anchor-width)" }}>
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset>
        <styled.header
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: "4",
            h: "12",
          }}
        >
          <SidebarTrigger />
        </styled.header>
      </SidebarInset>
    </SidebarProvider>
  );
}
