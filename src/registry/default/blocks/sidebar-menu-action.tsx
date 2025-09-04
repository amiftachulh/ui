"use client";

import { LuChartPie, LuEllipsis, LuFrame, LuLifeBuoy, LuMap, LuSend } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
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
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction>
                          <LuEllipsis />
                          <styled.span css={{ srOnly: true }}>More</styled.span>
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
