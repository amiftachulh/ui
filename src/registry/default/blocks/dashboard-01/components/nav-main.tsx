"use client";

import { type IconType } from "react-icons";
import { TbCirclePlusFilled, TbMail } from "react-icons/tb";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/default/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: IconType;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent css={{ display: "flex", flexDir: "column", gap: "2" }}>
        <SidebarMenu>
          <SidebarMenuItem css={{ display: "flex", alignItems: "center", gap: "2" }}>
            <SidebarMenuButton
              tooltip="Quick Create"
              css={{
                minW: "8",
                bg: "primary",
                color: "primary.fg",
                transitionDuration: "normal",
                transitionTimingFunction: "linear",
                _hover: {
                  bg: "primary/90",
                  color: "primary.fg",
                },
                "&:active": {
                  bg: "primary/90",
                  color: "primary.fg",
                },
              }}
            >
              <TbCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              css={{
                w: "8",
                h: "8",
                ".group[data-collapsible=icon] &": { opacity: "0" },
              }}
              variant="outline"
            >
              <TbMail />
              <styled.span css={{ srOnly: true }}>Inbox</styled.span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
