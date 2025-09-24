"use client";

import * as React from "react";
import { LuChevronsUpDown, LuPlus } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/default/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              css={{
                "&[data-state=open]": {
                  bg: "sidebar.accent",
                  color: "sidebar.accent.fg",
                },
              }}
            >
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
                <styled.span css={{ truncate: true, fontWeight: "medium" }}>
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
            css={{ w: "var(--radix-dropdown-menu-trigger-width)", minW: "56", rounded: "lg" }}
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel css={{ color: "muted.fg", textStyle: "xs" }}>
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                css={{ gap: "2", p: "2" }}
              >
                <styled.div
                  css={{
                    display: "flex",
                    w: "6",
                    h: "6",
                    alignItems: "center",
                    justifyContent: "center",
                    rounded: "md",
                    borderWidth: "1px",
                  }}
                >
                  <team.logo className={css({ w: "3.5", h: "3.5", flexShrink: "0" })} />
                </styled.div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem css={{ gap: "2", p: "2" }}>
              <styled.div
                css={{
                  display: "flex",
                  w: "6",
                  h: "6",
                  alignItems: "center",
                  justifyContent: "center",
                  rounded: "md",
                  borderWidth: "1px",
                  bg: "transparent",
                }}
              >
                <LuPlus className={css({ w: "4", h: "4" })} />
              </styled.div>
              <styled.div css={{ color: "muted.fg", fontWeight: "medium" }}>Add team</styled.div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
