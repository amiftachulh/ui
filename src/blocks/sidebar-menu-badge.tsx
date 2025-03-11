"use client";

import { LuChartPie, LuFrame, LuLifeBuoy, LuMap, LuSend } from "react-icons/lu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: LuFrame,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: LuChartPie,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: LuMap,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LuLifeBuoy,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: LuSend,
    badge: "8",
  },
];

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      asChild
                      css={{
                        ".group-menu-item:has([data-state=open]) &": { bg: "sidebar.accent" },
                      }}
                    >
                      <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
