"use client";

import * as React from "react";
import {
  LuArrowDown,
  LuArrowUp,
  LuBell,
  LuChartLine,
  LuCopy,
  LuCornerUpLeft,
  LuCornerUpRight,
  LuEllipsis,
  LuFileText,
  LuGalleryVerticalEnd,
  LuLink,
  LuSettings2,
  LuStar,
  LuTrash,
  LuTrash2,
} from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/default/ui/sidebar";

const data = [
  [
    {
      label: "Customize Page",
      icon: LuSettings2,
    },
    {
      label: "Turn into wiki",
      icon: LuFileText,
    },
  ],
  [
    {
      label: "Copy Link",
      icon: LuLink,
    },
    {
      label: "Duplicate",
      icon: LuCopy,
    },
    {
      label: "Move to",
      icon: LuCornerUpRight,
    },
    {
      label: "Move to Trash",
      icon: LuTrash2,
    },
  ],
  [
    {
      label: "Undo",
      icon: LuCornerUpLeft,
    },
    {
      label: "View analytics",
      icon: LuChartLine,
    },
    {
      label: "Version History",
      icon: LuGalleryVerticalEnd,
    },
    {
      label: "Show delete pages",
      icon: LuTrash,
    },
    {
      label: "Notifications",
      icon: LuBell,
    },
  ],
  [
    {
      label: "Import",
      icon: LuArrowUp,
    },
    {
      label: "Export",
      icon: LuArrowDown,
    },
  ],
];

export function NavActions() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "2", textStyle: "sm" }}>
      <styled.div
        css={{
          color: "muted.fg",
          display: "none",
          fontWeight: "medium",
          md: { display: "inline-block" },
        }}
      >
        Edit Oct 08
      </styled.div>
      <Button variant="ghost" size="icon" css={{ w: "7", h: "7" }}>
        <LuStar />
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            css={{ w: "7", h: "7", "&[data-state=open]": { bg: "accent" } }}
          >
            <LuEllipsis />
          </Button>
        </PopoverTrigger>
        <PopoverContent css={{ w: "56", overflow: "hidden", rounded: "lg", p: "0" }} align="end">
          <Sidebar collapsible="none" css={{ bg: "transparent" }}>
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup
                  key={index}
                  css={{ borderBottomWidth: "1px", _last: { borderWidth: "0" } }}
                >
                  <SidebarGroupContent css={{ gap: "0" }}>
                    <SidebarMenu>
                      {group.map((item, index) => (
                        <SidebarMenuItem key={index}>
                          <SidebarMenuButton>
                            <item.icon /> <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </styled.div>
  );
}
