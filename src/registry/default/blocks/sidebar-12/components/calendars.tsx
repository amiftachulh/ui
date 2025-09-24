import * as React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/registry/default/ui/sidebar";

export function Calendars({
  calendars,
}: {
  calendars: {
    name: string;
    items: string[];
  }[];
}) {
  return (
    <>
      {calendars.map((calendar, index) => (
        <React.Fragment key={calendar.name}>
          <SidebarGroup key={calendar.name} className="py-0">
            <Collapsible defaultOpen={index === 0} className="group-collapsible">
              <SidebarGroupLabel
                asChild
                css={{
                  w: "full",
                  color: "sidebar.fg",
                  textStyle: "sm",
                  _hover: {
                    bg: "sidebar.accent",
                    color: "sidebar.accent.fg",
                  },
                }}
              >
                <CollapsibleTrigger>
                  {calendar.name}{" "}
                  <LuChevronRight
                    className={css({
                      ml: "auto",
                      transition: "transform",
                      ".group-collapsible[data-state=open] &": { transform: "rotate(90deg)" },
                    })}
                  />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {calendar.items.map((item, index) => (
                      <SidebarMenuItem key={item}>
                        <SidebarMenuButton>
                          <styled.div
                            data-active={index < 2}
                            css={{
                              display: "flex",
                              aspectRatio: "square",
                              w: "4",
                              h: "4",
                              flexShrink: "0",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "sidebar.primary.fg",
                              borderWidth: "1px",
                              borderColor: "sidebar.border",
                              rounded: "sm",
                              "&[data-active=true]": {
                                bg: "sidebar.primary",
                                borderColor: "sidebar.primary",
                              },
                            }}
                            className="group-calendar-item"
                          >
                            <LuCheck
                              className={css({
                                display: "none",
                                w: "3",
                                h: "3",
                                ".group-calendar-item[data-active=true] &": {
                                  display: "block",
                                },
                              })}
                            />
                          </styled.div>
                          {item}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator css={{ mx: "0" }} />
        </React.Fragment>
      ))}
    </>
  );
}
