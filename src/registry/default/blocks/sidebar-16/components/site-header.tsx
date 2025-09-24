"use client";

import { LuPanelLeft } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { SearchForm } from "@/registry/default/blocks/sidebar-16/components/search-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { Button } from "@/registry/default/ui/button";
import { Separator } from "@/registry/default/ui/separator";
import { useSidebar } from "@/registry/default/ui/sidebar";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <styled.header
      css={{
        bg: "bg",
        pos: "sticky",
        top: "0",
        zIndex: "50",
        display: "flex",
        w: "full",
        alignItems: "center",
        borderBottomWidth: "1px",
      }}
    >
      <styled.div
        css={{
          display: "flex",
          h: "var(--header-height)",
          w: "full",
          alignItems: "center",
          gap: "2",
          px: "4",
        }}
      >
        <Button css={{ w: "8", h: "8" }} variant="ghost" size="icon" onClick={toggleSidebar}>
          <LuPanelLeft />
        </Button>
        <Separator orientation="vertical" css={{ mr: "2", h: "4" }} />
        <Breadcrumb css={{ display: "none", sm: { display: "block" } }}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm css={{ w: "full", sm: { ml: "auto", w: "auto" } }} />
      </styled.div>
    </styled.header>
  );
}
