"use client";

import * as React from "react";
import {
  TbCamera,
  TbChartBar,
  TbDashboard,
  TbDatabase,
  TbFileAi,
  TbFileDescription,
  TbFileWord,
  TbFolder,
  TbHelp,
  TbInnerShadowTop,
  TbListDetails,
  TbReport,
  TbSearch,
  TbSettings,
  TbUsers,
} from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { NavDocuments } from "@/registry/default/blocks/dashboard-01/components/nav-documents";
import { NavMain } from "@/registry/default/blocks/dashboard-01/components/nav-main";
import { NavSecondary } from "@/registry/default/blocks/dashboard-01/components/nav-secondary";
import { NavUser } from "@/registry/default/blocks/dashboard-01/components/nav-user";
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
      title: "Dashboard",
      url: "#",
      icon: TbDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: TbListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: TbChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: TbFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: TbUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: TbCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: TbFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: TbFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: TbSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: TbHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: TbSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: TbDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: TbReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: TbFileWord,
    },
  ],
};

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              css={{
                "& [data-sidebar=menu-button]": {
                  p: "1.5!",
                },
              }}
            >
              <a href="#">
                <TbInnerShadowTop className={css({ w: "5", h: "5" })} />
                <styled.span css={{ textStyle: "md", fontWeight: "semibold" }}>
                  Acme Inc.
                </styled.span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} css={{ mt: "auto" }} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
