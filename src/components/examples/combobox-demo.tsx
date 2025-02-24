"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Popover } from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          css={{ w: "200px", justifyContent: "space-between" }}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <LuChevronsUpDown className={css({ opacity: "0.5" })} />
        </Button>
      </Popover.Trigger>
      <Popover.Content css={{ w: "200px", p: "0" }}>
        <Command.Root>
          <Command.Input placeholder="Search framework..." />
          <Command.List>
            <Command.Empty>No framework found.</Command.Empty>
            <Command.Group>
              {frameworks.map((framework) => (
                <Command.Item
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <LuCheck
                    className={cx(
                      css({ ml: "auto" }),
                      value === framework.value ? css({ opacity: "1" }) : css({ opacity: "0" })
                    )}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
