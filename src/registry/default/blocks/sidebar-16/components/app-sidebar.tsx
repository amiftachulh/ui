"use client";

import * as React from "react";
import {
  LuBookOpen,
  LuBot,
  LuChartPie,
  LuCommand,
  LuFrame,
  LuLifeBuoy,
  LuMap,
  LuSend,
  LuSettings2,
  LuSquareTerminal,
} from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { NavMain } from "@/registry/default/blocks/sidebar-16/components/nav-main";
import { NavProjects } from "@/registry/default/blocks/sidebar-16/components/nav-projects";
import { NavSecondary } from "@/registry/default/blocks/sidebar-16/components/nav-secondary";
import { NavUser } from "@/registry/default/blocks/sidebar-16/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/default/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: LuSquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: LuBot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: LuBookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: LuSettings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LuLifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: LuSend,
    },
  ],
  projects: [
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
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      css={{
        top: "var(--header-height)",
        h: "calc(100svh - var(--header-height))!",
      }}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <styled.div
                  css={{
                    bg: "sidebar.primary",
                    color: "sidebar.primary.fg",
                    display: "flex",
                    aspectRatio: "square",
                    w: "8",
                    h: "8",
                    alignItems: "center",
                    justifyContent: "center",
                    rounded: "lg",
                  }}
                >
                  <LuCommand className={css({ w: "4", h: "4" })} />
                </styled.div>
                <styled.div
                  css={{
                    display: "grid",
                    flex: "1",
                    textAlign: "left",
                    textStyle: "sm",
                    lineHeight: "tight",
                  }}
                >
                  <styled.span css={{ truncate: true, fontWeight: "medium" }}>Acme Inc</styled.span>
                  <styled.span css={{ truncate: true, textStyle: "xs" }}>Enterprise</styled.span>
                </styled.div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} css={{ mt: "auto" }} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
