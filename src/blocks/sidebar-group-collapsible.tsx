"use client";

import { LuChevronDown, LuLifeBuoy, LuSend } from "react-icons/lu";
import { css } from "styled-system/css";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
} from "@/components/ui/sidebar";

export default function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                css={{
                  textStyle: "sm",
                  _hover: {
                    bg: "sidebar.accent",
                    color: "sidebar.accent.fg",
                  },
                }}
              >
                <CollapsibleTrigger>
                  Help
                  <LuChevronDown
                    className={css({
                      ml: "auto",
                      transition: "transform",
                      ".group[data-state=open] &": { transform: "rotate(180deg)" },
                    })}
                  />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LuLifeBuoy />
                        Support
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LuSend />
                        Feedback
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
