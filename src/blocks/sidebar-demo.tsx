"use client";

import { LuCalendar, LuHouse, LuInbox, LuSearch, LuSettings } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: LuHouse,
  },
  {
    title: "Inbox",
    url: "#",
    icon: LuInbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: LuCalendar,
  },
  {
    title: "Search",
    url: "#",
    icon: LuSearch,
  },
  {
    title: "Settings",
    url: "#",
    icon: LuSettings,
  },
];

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
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
