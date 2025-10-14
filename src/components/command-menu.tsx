"use client";

import * as React from "react";
import { LuCircle, LuFile, LuLaptop, LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { scroll } from "styled-system/recipes";
import { docsConfig } from "@/config/docs";
import { useIsMac } from "@/hooks/use-is-mac";
import { Button } from "@/registry/default/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command";
import { Kbd, KbdGroup } from "@/registry/default/ui/kbd";

export default function CommandMenu(props: React.ComponentProps<typeof Button>) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();
  const isMac = useIsMac();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        css={{
          pos: "relative",
          w: "full",
          justifyContent: "space-between",
          rounded: "md",
          bg: "muted/50",
          color: "muted.fg",
          textStyle: "sm",
          fontWeight: "normal",
          shadow: "none",
          md: { w: "52" },
          lg: { w: "60" },
          xl: { w: "64" },
        }}
        onClick={() => setOpen(true)}
        {...props}
      >
        <styled.span css={{ display: "none", lg: { display: "inline-flex" } }}>
          Search documentation...
        </styled.span>
        <styled.span css={{ display: "inline-flex", lg: { display: "none" } }}>
          Search...
        </styled.span>
        <KbdGroup>
          <Kbd css={{ borderWidth: "1px" }}>{isMac ? "⌘" : "Ctrl"}</Kbd>
          <Kbd css={{ borderWidth: "1px" }}>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className={scroll()}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {docsConfig.mainNav.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.title}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href as string));
                }}
              >
                <LuFile />
                {navItem.title}
              </CommandItem>
            ))}
          </CommandGroup>
          {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <styled.div
                    css={{
                      mr: "2",
                      display: "flex",
                      w: "4",
                      h: "4",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LuCircle className={css({ w: "3", h: "3" })} />
                  </styled.div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <LuSun />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <LuMoon />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LuLaptop />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
