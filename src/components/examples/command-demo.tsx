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

export default function CommandDemo() {
  return (
    <Command.Root
      className={css({ rounded: "lg", borderWidth: "1px", shadow: "md", md: { minW: "450px" } })}
    >
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
          <Command.Item disabled>
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
    </Command.Root>
  );
}
