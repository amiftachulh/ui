"use client";

import * as React from "react";
import { LuArchiveX, LuCommand, LuFile, LuInbox, LuSend, LuTrash2 } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { NavUser } from "@/registry/default/blocks/sidebar-09/components/nav-user";
import { Label } from "@/registry/default/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/default/ui/sidebar";
import { Switch } from "@/registry/default/ui/switch";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: LuInbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: LuFile,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: LuSend,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: LuArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: LuTrash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser:
        "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Vacation Plans",
      date: "1 week ago",
      teaser:
        "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
    },
    {
      name: "James Martin",
      email: "jamesmartin@example.com",
      subject: "Re: Conference Registration",
      date: "1 week ago",
      teaser:
        "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Team Dinner",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [mails, setMails] = React.useState(data.mails);
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      css={{ overflow: "hidden", "& > *[data-sidebar=sidebar]": { flexDir: "row" } }}
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        css={{
          w: "calc(var(--sidebar-width-icon) + 1px)!",
          borderRightWidth: "1px",
        }}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild css={{ md: { h: "8", p: "0" } }}>
                <a href="#">
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
                    <LuCommand className={css({ w: "4", h: "4" })} />
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
                      Acme Inc
                    </styled.span>
                    <styled.span css={{ truncate: true, textStyle: "xs" }}>Enterprise</styled.span>
                  </styled.div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent css={{ px: "1.5", md: { px: "0" } }}>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);
                        const mail = data.mails.sort(() => Math.random() - 0.5);
                        setMails(mail.slice(0, Math.max(5, Math.floor(Math.random() * 10) + 1)));
                        setOpen(true);
                      }}
                      isActive={activeItem?.title === item.title}
                      css={{ px: "2.5", md: { px: "2" } }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" css={{ display: "none", flex: "1", md: { display: "flex" } }}>
        <SidebarHeader css={{ gap: "3.5", borderBottomWidth: "1px", p: "4" }}>
          <styled.div
            css={{
              display: "flex",
              w: "full",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <styled.div css={{ color: "fg", textStyle: "md", fontWeight: "medium" }}>
              {activeItem?.title}
            </styled.div>
            <Label css={{ display: "flex", alignItems: "center", gap: "2", textStyle: "sm" }}>
              <span>Unreads</span>
              <Switch css={{ shadow: "none" }} />
            </Label>
          </styled.div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup css={{ px: "0" }}>
            <SidebarGroupContent>
              {mails.map((mail) => (
                <styled.a
                  href="#"
                  key={mail.email}
                  css={{
                    display: "flex",
                    flexDir: "column",
                    alignItems: "flex-start",
                    gap: "2",
                    borderBottomWidth: "1px",
                    p: "4",
                    textStyle: "sm",
                    lineHeight: "tight",
                    whiteSpace: "nowrap",
                    _last: { borderBottomWidth: "0" },
                    _hover: {
                      bg: "sidebar.accent",
                      color: "sidebar.accent.fg",
                    },
                  }}
                >
                  <styled.div css={{ display: "flex", w: "full", alignItems: "center", gap: "2" }}>
                    <span>{mail.name}</span>{" "}
                    <styled.span css={{ ml: "auto", textStyle: "xs" }}>{mail.date}</styled.span>
                  </styled.div>
                  <styled.span css={{ fontWeight: "medium" }}>{mail.subject}</styled.span>
                  <styled.span
                    css={{
                      lineClamp: "2",
                      w: "260px",
                      textStyle: "xs",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {mail.teaser}
                  </styled.span>
                </styled.a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
