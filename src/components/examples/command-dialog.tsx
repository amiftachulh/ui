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
import { css } from "styled-system/css";
import { Command } from "@/components/ui/command";

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
      <p className={css({ textStyle: "sm", color: "muted.fg" })}>
        Press{" "}
        <kbd
          className={css({
            pointerEvents: "none",
            display: "inline-flex",
            h: "5",
            userSelect: "none",
            alignItems: "center",
            gap: "1",
            rounded: "md",
            borderWidth: "1px",
            bg: "muted",
            px: "1.5",
            fontFamily: "mono",
            fontSize: "0.625rem",
            fontWeight: "medium",
            color: "muted.fg",
            opacity: "1",
          })}
        >
          <span className={css({ textStyle: "xs" })}>⌘</span>J
        </kbd>
      </p>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <LuCalendar />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <LuSmile />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <LuCalculator />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <LuUser />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <LuCreditCard />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <LuSettings />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
