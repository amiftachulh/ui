"use client";

import * as React from "react";
import { LuChevronDown, LuPlus } from "react-icons/lu";
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
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/registry/default/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton css={{ w: "fit", px: "1.5" }}>
              <styled.div
                css={{
                  bg: "sidebar.primary",
                  color: "sidebar.primary.fg",
                  display: "flex",
                  aspectRatio: "square",
                  w: "5",
                  h: "5",
                  alignItems: "center",
                  justifyContent: "center",
                  rounded: "md",
                }}
              >
                <activeTeam.logo className={css({ w: "3", h: "3" })} />
              </styled.div>
              <styled.span css={{ truncate: true, fontWeight: "medium" }}>
                {activeTeam.name}
              </styled.span>
              <LuChevronDown className={css({ opacity: "0.5" })} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            css={{ w: "64", rounded: "lg" }}
            align="start"
            side="bottom"
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
                    rounded: "xs",
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
            <DropdownMenuItem css={{ gap: "2", p: "2" }}>
              <styled.div
                css={{
                  bg: "bg",
                  display: "flex",
                  w: "6",
                  h: "6",
                  alignItems: "center",
                  justifyContent: "center",
                  rounded: "md",
                  borderWidth: "1px",
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
