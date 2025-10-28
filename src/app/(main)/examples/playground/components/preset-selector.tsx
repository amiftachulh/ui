"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown } from "react-icons/lu";
import { PopoverProps } from "@radix-ui/react-popover";
import { css } from "styled-system/css";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/default/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";
import { Preset } from "../data/presets";

interface PresetSelectorProps extends PopoverProps {
  presets: Preset[];
}

export function PresetSelector({ presets, ...props }: PresetSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedPreset, setSelectedPreset] = React.useState<Preset>();

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Load a preset..."
          aria-expanded={open}
          css={{
            flex: "1",
            justifyContent: "space-between",
            md: { maxW: "200px" },
            lg: { maxW: "300px" },
          }}
        >
          {selectedPreset ? selectedPreset.name : "Load a preset..."}
          <LuChevronsUpDown className={css({ opacity: "0.5" })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "300px", p: "0" }}>
        <Command>
          <CommandInput placeholder="Search presets..." />
          <CommandList>
            <CommandEmpty>No presets found.</CommandEmpty>
            <CommandGroup heading="Examples">
              {presets.map((preset) => (
                <CommandItem
                  key={preset.id}
                  onSelect={() => {
                    setSelectedPreset(preset);
                    setOpen(false);
                  }}
                >
                  {preset.name}
                  <LuCheck
                    data-selected={selectedPreset?.id === preset.id}
                    className={css({
                      ml: "auto",
                      opacity: "0",
                      "&[data-selected=true]": { opacity: "1" },
                    })}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>More examples</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
