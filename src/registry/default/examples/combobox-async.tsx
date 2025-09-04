"use client";

import * as React from "react";
import { LuCheck, LuChevronsUpDown, LuLoader } from "react-icons/lu";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Button } from "@/registry/default/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/default/ui/popover";

interface Framework {
  value: string;
  label: string;
}

export default function ComboboxAsync() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [frameworks, setFrameworks] = React.useState<Framework[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      fetchFrameworks(searchQuery);
    }
  }, [open, searchQuery]);

  const fetchFrameworks = async (query: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData = [
        { value: "next.js", label: "Next.js" },
        { value: "sveltekit", label: "SvelteKit" },
        { value: "nuxt.js", label: "Nuxt.js" },
        { value: "remix", label: "Remix" },
        { value: "astro", label: "Astro" },
      ].filter((item) => (query ? item.label.toLowerCase().includes(query.toLowerCase()) : true));

      setFrameworks(mockData);
    } catch (error) {
      console.error("Error fetching frameworks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          css={{ w: "200px", justifyContent: "space-between" }}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label ||
              "Select framework..."
            : "Select framework..."}
          <LuChevronsUpDown className={css({ opacity: "0.5" })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "200px", p: "0" }}>
        <Command>
          <CommandInput
            placeholder="Search framework..."
            value={searchQuery}
            onValueChange={handleInputChange}
          />
          <CommandList>
            {isLoading ? (
              <styled.div
                css={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: "2",
                  px: "2",
                  color: "gray.500",
                  fontSize: "sm",
                }}
              >
                <LuLoader
                  className={css({
                    animation: "spin 2s linear infinite",
                    mr: "2",
                  })}
                />
                <span>Loading frameworks...</span>
              </styled.div>
            ) : (
              <>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <LuCheck
                        className={css({
                          ml: "auto",
                          opacity: value === framework.value ? "1" : "0",
                        })}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
