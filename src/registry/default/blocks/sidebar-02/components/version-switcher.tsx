"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown, LuGalleryVerticalEnd } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/registry/default/ui/sidebar";

export function VersionSwitcher({
  versions,
  defaultVersion,
}: {
  versions: string[];
  defaultVersion: string;
}) {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

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
                <LuGalleryVerticalEnd className={css({ w: "4", h: "4" })} />
              </styled.div>
              <styled.div
                css={{ display: "flex", flexDir: "column", gap: "0.5", lineHeight: "none" }}
              >
                <styled.span css={{ fontWeight: "medium" }}>Documentation</styled.span>
                <span>v{selectedVersion}</span>
              </styled.div>
              <LuChevronsUpDown className={css({ ml: "auto" })} />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            css={{ w: "var(--radix-dropdown-menu-trigger-width)" }}
          >
            {versions.map((version) => (
              <DropdownMenuItem key={version} onSelect={() => setSelectedVersion(version)}>
                v{version}{" "}
                {version === selectedVersion && <LuCheck className={css({ ml: "auto" })} />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
