"use client";

import * as React from "react";
import { LuCalendar, LuEllipsis, LuTags, LuTrash, LuUser } from "react-icons/lu";
import { styled } from "styled-system/jsx";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
];

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature");
  const [open, setOpen] = React.useState(false);

  return (
    <styled.div
      display="flex"
      w="full"
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      rounded="md"
      borderWidth="1px"
      px="4"
      py="3"
      sm={{ flexDir: "row", alignItems: "center" }}
    >
      <styled.p textStyle="sm" lineHeight="none" fontWeight="medium">
        <styled.span
          display="inline-block"
          rounded="lg"
          px="2"
          py="1"
          textStyle="xs"
          lineHeight="xs"
          bg="primary"
          color="primary.fg"
          mr="2"
        >
          {label}
        </styled.span>
        <styled.span color="muted.fg">Create a new project</styled.span>
      </styled.p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <LuEllipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" w="200px">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <LuUser /> Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LuCalendar /> Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <LuTags /> Apply label
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent p="0">
                <Command>
                  <CommandInput placeholder="Filter label..." autoFocus />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value);
                            setOpen(false);
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem color="red.600">
              <LuTrash /> Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </styled.div>
  );
}
