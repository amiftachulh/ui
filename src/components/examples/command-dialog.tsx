"use client";

import { useEffect, useState } from "react";
import {
  LuCalculator,
  LuCalendar,
  LuCreditCard,
  LuSettings,
  LuSmile,
  LuUser,
} from "react-icons/lu";
import { styled } from "styled-system/jsx";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

export default function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>
        Press{" "}
        <Kbd>
          <styled.span css={{ textStyle: "xs" }}>⌘</styled.span>J
        </Kbd>
      </styled.p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LuCalendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <LuSmile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <LuCalculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <LuUser />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LuCreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LuSettings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
