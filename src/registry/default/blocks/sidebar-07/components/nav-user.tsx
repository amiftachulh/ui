"use client";

import {
  LuBadgeCheck,
  LuBell,
  LuChevronsUpDown,
  LuCreditCard,
  LuLogOut,
  LuSparkles,
} from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/default/ui/sidebar";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const { isMobile } = useSidebar();

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
              <Avatar css={{ w: "8", h: "8", rounded: "lg" }}>
                <AvatarImage src={user.avatar} alt={user.name} />
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
                <styled.span css={{ truncate: true, fontWeight: "medium" }}>
                  {user.name}
                </styled.span>
                <styled.span css={{ truncate: true, textStyle: "xs" }}>{user.email}</styled.span>
              </styled.div>
              <LuChevronsUpDown className={css({ ml: "auto", w: "4", h: "4" })} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            css={{ w: "var(--radix-dropdown-menu-trigger-width)", minW: "56", rounded: "lg" }}
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
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
                  <AvatarImage src={user.avatar} alt={user.name} />
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
                  <styled.span css={{ truncate: true, fontWeight: "medium" }}>
                    {user.name}
                  </styled.span>
                  <styled.span css={{ truncate: true, textStyle: "xs" }}>{user.email}</styled.span>
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
  );
}
