"use client";

import { type IconType } from "react-icons";
import { TbDots, TbFolder, TbShare3, TbTrash } from "react-icons/tb";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/default/ui/sidebar";

export function NavDocuments({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: IconType;
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup css={{ ".group[data-collapsible=icon] &": { display: "none" } }}>
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  css={{ rounded: "sm", "&[data-state=open]": { bg: "accent" } }}
                >
                  <TbDots />
                  <styled.span css={{ srOnly: true }}>More</styled.span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                css={{ w: "24", rounded: "lg" }}
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <TbFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TbShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="danger">
                  <TbTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton css={{ color: "sidebar.fg/70" }}>
            <TbDots className={css({ color: "sidebar.fg/70" })} />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
