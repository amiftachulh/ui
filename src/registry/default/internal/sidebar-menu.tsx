"use client";

import { LuChartPie, LuFrame, LuLifeBuoy, LuMap, LuSend } from "react-icons/lu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: LuFrame,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: LuChartPie,
  },
  {
    name: "Travel",
    url: "#",
    icon: LuMap,
  },
  {
    name: "Support",
    url: "#",
    icon: LuLifeBuoy,
  },
  {
    name: "Feedback",
    url: "#",
    icon: LuSend,
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
                    <SidebarMenuButton asChild>
                      <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
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
