import {
  LuCalculator,
  LuCalendar,
  LuCreditCard,
  LuSettings,
  LuSmile,
  LuUser,
} from "react-icons/lu";
import { css } from "styled-system/css";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/default/ui/command";

export default function CommandDemo() {
  return (
    <Command
      className={css({ rounded: "lg", borderWidth: "1px", shadow: "md", md: { minW: "450px" } })}
    >
      <CommandInput placeholder="Type a command or search" />
      <CommandList>
        <CommandEmpty>No results found</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LuCalendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <LuSmile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
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
    </Command>
  );
}
