"use client";

import { LuChevronDown } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/default/ui/item";

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
];

export default function ItemDropdown() {
  return (
    <styled.div
      css={{
        display: "flex",
        minH: "64",
        w: "full",
        maxW: "md",
        flexDir: "column",
        alignItems: "center",
        gap: "6",
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" css={{ w: "fit" }}>
            Select <LuChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent css={{ w: "72" }} align="end">
          {people.map((person) => (
            <DropdownMenuItem key={person.username} css={{ p: "0" }}>
              <Item size="sm" css={{ w: "full", p: "2" }}>
                <ItemMedia>
                  <Avatar css={{ w: "8", h: "8" }}>
                    <AvatarImage src={person.avatar} css={{ filter: "grayscale" }} />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent css={{ gap: "0.5" }}>
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </styled.div>
  );
}
