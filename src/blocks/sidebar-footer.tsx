"use client";

import { LuChevronUp, LuUser } from "react-icons/lu";
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
  SidebarContent,
  SidebarFooter,
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
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
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
                    <LuUser /> Username
                    <LuChevronUp className={css({ ml: "auto" })} />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top" css={{ w: "var(--radix-popper-anchor-width)" }}>
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
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
