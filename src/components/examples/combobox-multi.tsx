"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { css } from "styled-system/css";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

type Framework = (typeof frameworks)[number];

export default function ComboboxMulti() {
  const [open, setOpen] = React.useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<Framework[]>([]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          css={{ w: "fit", minW: "280px", justifyContent: "space-between" }}
        >
          {selectedFrameworks.length > 0
            ? selectedFrameworks.map((framework) => framework.label).join(", ")
            : "Select framework..."}
          <LuChevronsUpDown className={css({ color: "muted.fg" })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" css={{ w: "300px", p: "0" }}>
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setSelectedFrameworks(
                      selectedFrameworks.some((f) => f.value === currentValue)
                        ? selectedFrameworks.filter((f) => f.value !== currentValue)
                        : [...selectedFrameworks, framework]
                    );
                  }}
                >
                  <styled.div
                    data-selected={selectedFrameworks.some((f) => f.value === framework.value)}
                    css={{
                      borderWidth: "1px",
                      borderColor: "input",
                      pointerEvents: "none",
                      w: "4",
                      h: "4",
                      flexShrink: "0",
                      rounded: "4px",
                      transition: "all",
                      userSelect: "none",
                      "& > svg": { opacity: "0" },
                      "&[data-selected=true]": {
                        borderColor: "primary",
                        bg: "primary",
                        color: "primary.fg",
                        "& > svg": { opacity: "1" },
                      },
                    }}
                  >
                    <LuCheck className={css({ w: "3.5", h: "3.5", color: "current" })} />
                  </styled.div>
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
