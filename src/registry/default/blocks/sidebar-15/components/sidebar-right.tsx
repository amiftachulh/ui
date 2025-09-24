import * as React from "react";
import { LuPlus } from "react-icons/lu";
import { Calendars } from "@/registry/default/blocks/sidebar-15/components/calendars";
import { DatePicker } from "@/registry/default/blocks/sidebar-15/components/date-picker";
import { NavUser } from "@/registry/default/blocks/sidebar-15/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/registry/default/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
};

export function SidebarRight({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      css={{
        pos: "sticky",
        top: "0",
        display: "none",
        h: "svh",
        borderLeftWidth: "1px",
        lg: { display: "flex" },
      }}
      {...props}
    >
      <SidebarHeader css={{ h: "16", borderColor: "sidebar.border", borderBottomWidth: "1px" }}>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator css={{ mx: "0" }} />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LuPlus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
