"use client";

import * as React from "react";
import { LuCircle, LuCircleArrowUp, LuCircleCheck, LuCircleHelp, LuCircleX } from "react-icons/lu";
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

type Status = {
  value: string;
  label: string;
  icon: React.ElementType;
};

const statuses: Status[] = [
  { value: "backlog", label: "Backlog", icon: LuCircleHelp },
  { value: "todo", label: "Todo", icon: LuCircle },
  { value: "in progress", label: "In Progress", icon: LuCircleArrowUp },
  { value: "done", label: "Done", icon: LuCircleCheck },
  { value: "canceled", label: "Canceled", icon: LuCircleX },
];

export default function ComboboxPopover() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null);

  return (
    <styled.div css={{ display: "flex", alignItems: "center", gap: "4" }}>
      <styled.p css={{ textStyle: "sm", color: "muted.fg" }}>Status</styled.p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            css={{ width: "150px", justifyContent: "flex-start" }}
          >
            {selectedStatus ? (
              <>
                <selectedStatus.icon
                  className={css({ marginRight: "2", width: "4", height: "4", flexShrink: "0" })}
                />
                {selectedStatus.label}
              </>
            ) : (
              "+ Set status"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent side="right" align="start" css={{ p: "0" }}>
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(statuses.find((s) => s.value === value) || null);
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={css({
                        marginRight: "2",
                        width: "4",
                        height: "4",
                        opacity: status.value === selectedStatus?.value ? "1" : "0.4",
                      })}
                    />
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </styled.div>
  );
}
