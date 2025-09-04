"use client";

import * as React from "react";
import {
  LuChartPie,
  LuFrame,
  LuLifeBuoy,
  LuMap,
  LuPanelLeftClose,
  LuPanelLeftOpen,
  LuSend,
} from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
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
  const [open, setOpen] = React.useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
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
      <SidebarInset>
        <styled.header
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            h: "12",
            px: "4",
          }}
        >
          <Button onClick={() => setOpen((open) => !open)} size="sm" variant="ghost">
            {open ? <LuPanelLeftClose /> : <LuPanelLeftOpen />}
            <span>{open ? "Close" : "Open"} Sidebar</span>
          </Button>
        </styled.header>
      </SidebarInset>
    </SidebarProvider>
  );
}
