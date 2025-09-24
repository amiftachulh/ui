"use client";

import * as React from "react";
import {
  LuBell,
  LuCheck,
  LuGlobe,
  LuHouse,
  LuKeyboard,
  LuLink,
  LuLock,
  LuMenu,
  LuMessageCircle,
  LuPaintbrush,
  LuSettings,
  LuVideo,
} from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/default/ui/sidebar";

const data = {
  nav: [
    { name: "Notifications", icon: LuBell },
    { name: "Navigation", icon: LuMenu },
    { name: "Home", icon: LuHouse },
    { name: "Appearance", icon: LuPaintbrush },
    { name: "Messages & media", icon: LuMessageCircle },
    { name: "Language & region", icon: LuGlobe },
    { name: "Accessibility", icon: LuKeyboard },
    { name: "Mark as read", icon: LuCheck },
    { name: "Audio & video", icon: LuVideo },
    { name: "Connected accounts", icon: LuLink },
    { name: "Privacy & visibility", icon: LuLock },
    { name: "Advanced", icon: LuSettings },
  ],
};

export function SettingsDialog() {
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent
        css={{
          overflow: "hidden",
          p: "0",
          md: {
            maxW: "700px",
            maxH: "500px",
          },
          lg: { maxW: "800px" },
        }}
      >
        <DialogTitle css={{ srOnly: true }}>Settings</DialogTitle>
        <DialogDescription css={{ srOnly: true }}>Customize your settings here.</DialogDescription>
        <SidebarProvider css={{ alignItems: "flex-start" }}>
          <Sidebar collapsible="none" css={{ display: "none", md: { display: "flex" } }}>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild isActive={item.name === "Messages & media"}>
                          <a href="#">
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <styled.main
            css={{ display: "flex", h: "480px", flex: "1", flexDir: "column", overflow: "hidden" }}
          >
            <styled.header
              css={{
                display: "flex",
                h: "16",
                flexShrink: "0",
                alignItems: "center",
                gap: "2",
                transitionProperty: "width,height",
                transitionTimingFunction: "linear",
                ".group-sidebar-wrapper:has([data-collapsible=icon]) &": {
                  h: "12",
                },
              }}
            >
              <styled.div css={{ display: "flex", alignItems: "center", gap: "2", px: "4" }}>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem css={{ display: "none", md: { display: "block" } }}>
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator css={{ display: "none", md: { display: "block" } }} />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Messages & media</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </styled.div>
            </styled.header>
            <styled.div
              css={{
                display: "flex",
                flex: "1",
                flexDir: "column",
                gap: "4",
                overflowY: "auto",
                p: "4",
                pt: "0",
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <styled.div
                  key={i}
                  css={{ bg: "muted/50", aspectRatio: "16/9", maxW: "3xl", rounded: "xl" }}
                />
              ))}
            </styled.div>
          </styled.main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
