import * as React from "react";
import { LuCheck, LuCirclePlus } from "react-icons/lu";
import { Column } from "@tanstack/react-table";
import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { Badge } from "@/registry/default/ui/badge";
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
import { Separator } from "@/registry/default/ui/separator";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" css={{ h: "8", borderStyle: "dashed" }}>
          <LuCirclePlus />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" css={{ mx: "2", h: "4" }} />
              <Badge
                variant="secondary"
                css={{ rounded: "sm", px: "1", fontWeight: "normal", lg: { display: "none" } }}
              >
                {selectedValues.size}
              </Badge>
              <styled.div css={{ display: "none", gap: "1", lg: { display: "flex" } }}>
                {selectedValues.size > 2 ? (
                  <Badge variant="secondary" css={{ rounded: "sm", px: "1", fontWeight: "normal" }}>
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        css={{ rounded: "sm", px: "1", fontWeight: "normal" }}
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </styled.div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent css={{ w: "200px", p: "0" }} align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(filterValues.length ? filterValues : undefined);
                    }}
                  >
                    <styled.div
                      data-selected={isSelected}
                      css={{
                        display: "flex",
                        w: "4",
                        h: "4",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: "1px",
                        rounded: "4px",
                        borderColor: "input",
                        "& svg": {
                          visibility: "hidden",
                        },
                        "&[data-selected=true]": {
                          bg: "primary",
                          borderColor: "primary",
                          color: "primary.fg",
                        },
                      }}
                    >
                      <LuCheck className={css({ color: "primary.fg", w: "3.5", h: "3.5" })} />
                    </styled.div>
                    {option.icon && (
                      <option.icon className={css({ color: "muted.fg", w: "4", h: "4" })} />
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.value) && (
                      <styled.span
                        css={{
                          color: "muted.fg",
                          ml: "auto",
                          display: "flex",
                          w: "4",
                          h: "4",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "mono",
                          textStyle: "xs",
                        }}
                      >
                        {facets.get(option.value)}
                      </styled.span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                    css={{ justifyContent: "center", textAlign: "center" }}
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
