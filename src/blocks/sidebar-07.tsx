"use client";

import * as React from "react";
import {
  LuAudioWaveform,
  LuBadgeCheck,
  LuBell,
  LuBookOpen,
  LuBot,
  LuChartPie,
  LuChevronRight,
  LuChevronsUpDown,
  LuCommand,
  LuCreditCard,
  LuEllipsis,
  LuFolder,
  LuForward,
  LuFrame,
  LuGalleryVerticalEnd,
  LuLogOut,
  LuMap,
  LuPlus,
  LuSettings2,
  LuSparkles,
  LuSquareTerminal,
  LuTrash2,
} from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const iframeHeight = "800px";

export const description = "A sidebar that collapses to icons.";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: LuGalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: LuAudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: LuCommand,
      plan: "Free",
    },
  ],
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

export default function Page() {
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    css={{
                      _open: {
                        bg: "sidebar.accent",
                        color: "sidebar.accent.fg",
                      },
                    }}
                  >
                    <styled.div
                      css={{
                        display: "flex",
                        aspectRatio: "square",
                        w: "8",
                        h: "8",
                        alignItems: "center",
                        justifyContent: "center",
                        rounded: "lg",
                        bg: "sidebar.primary",
                        color: "sidebar.primary.fg",
                      }}
                    >
                      <activeTeam.logo className={css({ w: "4", h: "4" })} />
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
                      <styled.span css={{ truncate: true, fontWeight: "semibold" }}>
                        {activeTeam.name}
                      </styled.span>
                      <styled.span css={{ truncate: true, textStyle: "xs" }}>
                        {activeTeam.plan}
                      </styled.span>
                    </styled.div>
                    <LuChevronsUpDown className={css({ ml: "auto" })} />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  side="bottom"
                  sideOffset={4}
                  css={{
                    w: "var(--radix-dropdown-menu-trigger-width)",
                    minW: "56",
                    rounded: "lg",
                  }}
                >
                  <DropdownMenuLabel css={{ textStyle: "xs", color: "muted.fg" }}>
                    Teams
                  </DropdownMenuLabel>
                  {data.teams.map((team, index) => (
                    <DropdownMenuItem
                      key={team.name}
                      onClick={() => setActiveTeam(team)}
                      css={{ gap: 2, p: 2 }}
                    >
                      <styled.div
                        css={{
                          display: "flex",
                          w: "6",
                          h: "6",
                          alignItems: "center",
                          justifyContent: "center",
                          rounded: "sm",
                          borderWidth: "1px",
                        }}
                      >
                        <team.logo className={css({ w: "4", h: "4", flexShrink: "0" })} />
                      </styled.div>
                      {team.name}
                      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem css={{ gap: 2, p: 2 }}>
                    <styled.div
                      css={{
                        display: "flex",
                        w: "6",
                        h: "6",
                        alignItems: "center",
                        justifyContent: "center",
                        rounded: "md",
                        borderWidth: "1px",
                        bg: "bg",
                      }}
                    >
                      <LuPlus className={css({ w: "4", h: "4" })} />
                    </styled.div>
                    <styled.div css={{ fontWeight: "medium", color: "muted.fg" }}>
                      Add team
                    </styled.div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group-collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <LuChevronRight
                          className={css({
                            ml: "auto",
                            transition: "transform",
                            ".group-collapsible[data-state=open] &": {
                              transform: "rotate(90deg)",
                            },
                          })}
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup
            css={{
              ".group[data-collapsible=icon] &": { display: "none" },
            }}
          >
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {data.projects.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction showOnHover>
                        <LuEllipsis />
                        <styled.span css={{ srOnly: true }}>More</styled.span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="end" css={{ w: "48", rounded: "lg" }}>
                      <DropdownMenuItem>
                        <LuFolder className={css({ color: "muted.fg" })} />
                        <span>View Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LuForward className={css({ color: "muted.fg" })} />
                        <span>Share Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <LuTrash2 className={css({ color: "muted.fg" })} />
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton css={{ color: "sidebar.fg/70" }}>
                  <LuEllipsis className={css({ color: "sidebar.fg/70" })} />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    css={{
                      _open: {
                        bg: "sidebar.accent",
                        color: "sidebar.accent.fg",
                      },
                    }}
                  >
                    <Avatar css={{ w: "8", h: "8", rounded: "lg" }}>
                      <AvatarImage src={data.user.avatar} alt={data.user.name} />
                      <AvatarFallback css={{ rounded: "lg" }}>CN</AvatarFallback>
                    </Avatar>
                    <styled.div
                      css={{
                        display: "grid",
                        flex: "1",
                        textAlign: "left",
                        textStyle: "sm",
                        lineHeight: "tight",
                      }}
                    >
                      <styled.span css={{ truncate: true, fontWeight: "semibold" }}>
                        {data.user.name}
                      </styled.span>
                      <styled.span css={{ truncate: true, textStyle: "xs" }}>
                        {data.user.email}
                      </styled.span>
                    </styled.div>
                    <LuChevronsUpDown className={css({ ml: "auto", w: "4", h: "4" })} />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  css={{
                    w: "var(--radix-dropdown-menu-trigger-width)",
                    minW: "56",
                    rounded: "lg",
                  }}
                >
                  <DropdownMenuLabel css={{ p: "0", fontWeight: "normal" }}>
                    <styled.div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2",
                        px: "1",
                        py: "1.5",
                        textAlign: "left",
                        textStyle: "sm",
                      }}
                    >
                      <Avatar css={{ w: "8", h: "8", rounded: "lg" }}>
                        <AvatarImage src={data.user.avatar} alt={data.user.name} />
                        <AvatarFallback css={{ rounded: "lg" }}>CN</AvatarFallback>
                      </Avatar>
                      <styled.div
                        css={{
                          display: "grid",
                          flex: "1",
                          textAlign: "left",
                          textStyle: "sm",
                          lineHeight: "tight",
                        }}
                      >
                        <styled.span css={{ truncate: true, fontWeight: "semibold" }}>
                          {data.user.name}
                        </styled.span>
                        <styled.span css={{ truncate: true, textStyle: "xs" }}>
                          {data.user.email}
                        </styled.span>
                      </styled.div>
                    </styled.div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <LuSparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <LuBadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LuCreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LuBell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LuLogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <styled.header
          css={{
            display: "flex",
            h: "16",
            flexShrink: "0",
            alignItems: "center",
            gap: "2",
            transitionProperty: "width, height",
            transitionDuration: "normal",
            transitionTimingFunction: "linear",
            ".group-sidebar-wrapper:has([data-collapsible=icon]) &": {
              h: "12",
            },
          }}
        >
          <styled.div css={{ display: "flex", alignItems: "center", gap: "2", px: "4" }}>
            <SidebarTrigger css={{ ml: "-1" }} />
            <Separator orientation="vertical" css={{ mr: "2", h: "4" }} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem css={{ display: "none", md: { display: "block" } }}>
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator css={{ display: "none", md: { display: "block" } }} />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </styled.div>
        </styled.header>
        <styled.div
          css={{ display: "flex", flex: "1", flexDir: "column", gap: "4", p: "4", pt: "0" }}
        >
          <styled.div
            css={{
              display: "grid",
              gridAutoRows: "min",
              gap: "4",
              md: { gridTemplateColumns: "repeat(3, 1fr)" },
            }}
          >
            <styled.div css={{ aspectRatio: "wide", rounded: "xl", bg: "muted/50" }} />
            <styled.div css={{ aspectRatio: "wide", rounded: "xl", bg: "muted/50" }} />
            <styled.div css={{ aspectRatio: "wide", rounded: "xl", bg: "muted/50" }} />
          </styled.div>
          <styled.div
            css={{ minH: "svh", flex: "1", rounded: "xl", bg: "muted/50", md: { minH: "min" } }}
          />
        </styled.div>
      </SidebarInset>
    </SidebarProvider>
  );
}
