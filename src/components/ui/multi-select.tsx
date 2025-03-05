"use client";

import * as React from "react";
import { LuCheck, LuChevronDown, LuCircleX, LuX } from "react-icons/lu";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // VariantProps<typeof multiSelectVariants>
  /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
  options: {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: React.ComponentType<{ className?: string }>;
  }[];

  /**
   * Callback function triggered when the selected values change.
   * Receives an array of the new selected values.
   */
  onValueChange: (value: string[]) => void;

  /** The default selected values when the component mounts. */
  defaultValue?: string[];

  /**
   * Placeholder text to be displayed when no values are selected.
   * Optional, defaults to "Select options".
   */
  placeholder?: string;

  /**
   * Maximum number of items to display. Extra selected items will be summarized.
   * Optional, defaults to 3.
   */
  maxCount?: number;

  /**
   * The modality of the popover. When set to true, interaction with outside elements
   * will be disabled and only popover content will be visible to screen readers.
   * Optional, defaults to false.
   */
  modalPopover?: boolean;

  /**
   * Additional class names to apply custom styles to the multi-select component.
   * Optional, can be used to add custom styles.
   */
  className?: string;
}

function MultiSelect({
  options,
  onValueChange,
  defaultValue = [],
  placeholder = "Select options",
  maxCount = 3,
  modalPopover = false,
  ...props
}: MultiSelectProps) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsPopoverOpen(true);
    } else if (event.key === "Backspace" && !event.currentTarget.value) {
      const newSelectedValues = [...selectedValues];
      newSelectedValues.pop();
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    }
  };

  const toggleOption = (option: string) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const handleClear = () => {
    setSelectedValues([]);
    onValueChange([]);
  };

  const handleTogglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const clearExtraOptions = () => {
    const newSelectedValues = selectedValues.slice(0, maxCount);
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  const toggleAll = () => {
    if (selectedValues.length === options.length) {
      handleClear();
    } else {
      const allValues = options.map((option) => option.value);
      setSelectedValues(allValues);
      onValueChange(allValues);
    }
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen} modal={modalPopover}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          onClick={handleTogglePopover}
          display="flex"
          w="full"
          px="3"
          alignItems="center"
          justifyContent="space-between"
          _hover={{ bg: "transparent" }}
          css={{
            "& svg": { pointerEvents: "auto" },
          }}
          {...props}
        >
          {selectedValues.length > 0 ? (
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                w: "full",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "2",
                })}
              >
                {selectedValues.slice(0, maxCount).map((value) => {
                  const option = options.find((o) => o.value === value);
                  return (
                    <Badge key={value} variant="secondary">
                      {option?.label}
                      <LuCircleX
                        className={css({ h: "4", w: "4", cursor: "pointer" })}
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(value);
                        }}
                      />
                    </Badge>
                  );
                })}
                {selectedValues.length > maxCount && (
                  <Badge variant="secondary" _hover={{ bg: "transparent" }}>
                    {`+ ${selectedValues.length - maxCount} more`}
                    <LuCircleX
                      className={css({ h: "4", w: "4", cursor: "pointer" })}
                      onClick={(event) => {
                        event.stopPropagation();
                        clearExtraOptions();
                      }}
                    />
                  </Badge>
                )}
              </div>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "between",
                })}
              >
                <LuX
                  className={css({ h: "4", mx: "2", cursor: "pointer", color: "muted.fg" })}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleClear();
                  }}
                />
                <Separator orientation="vertical" display="flex" minH="6" h="full" />
                <LuChevronDown
                  className={css({ h: "4", mx: "2", cursor: "pointer", color: "muted.fg" })}
                />
              </div>
            </div>
          ) : (
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                w: "full",
                mx: "auto",
              })}
            >
              <span className={css({ mx: "3", textStyle: "sm", color: "muted.fg" })}>
                {placeholder}
              </span>
              <LuChevronDown
                className={css({ h: "4", mx: "2", cursor: "pointer", color: "muted.fg" })}
              />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="var(--radix-popover-trigger-width)"
        p="0"
        align="start"
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command>
          <CommandInput placeholder="Search..." onKeyDown={handleInputKeyDown} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem key="all" onSelect={toggleAll} cursor="pointer">
                <div
                  className={cx(
                    css({
                      mr: "2",
                      display: "flex",
                      h: "4",
                      w: "4",
                      alignItems: "center",
                      justifyContent: "center",
                      rounded: "sm",
                      borderWidth: "1px",
                      borderColor: "primary",
                    }),
                    selectedValues.length === options.length
                      ? css({
                          bg: "primary",
                          color: "primary.fg",
                        })
                      : css({ opacity: "0.5", "& svg": { visibility: "hidden" } })
                  )}
                >
                  <LuCheck className={css({ w: "4", h: "4" })} />
                </div>
                <span>(Select All)</span>
              </CommandItem>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => toggleOption(option.value)}
                    cursor="pointer"
                  >
                    <div
                      className={cx(
                        css({
                          mr: "2",
                          display: "flex",
                          h: "4",
                          w: "4",
                          alignItems: "center",
                          justifyContent: "center",
                          rounded: "sm",
                          borderWidth: "1px",
                          borderColor: "primary",
                        }),
                        isSelected
                          ? css({
                              bg: "primary",
                              color: "primary.fg",
                            })
                          : css({ opacity: "0.5", "& svg": { visibility: "hidden" } })
                      )}
                    >
                      <LuCheck className={css({ w: "4", h: "4" })} />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <div className={flex({ align: "center", justify: "space-between" })}>
                {selectedValues.length > 0 && (
                  <>
                    <CommandItem
                      onSelect={handleClear}
                      className={css({ flex: "1", justifyContent: "center", cursor: "pointer" })}
                    >
                      Clear
                    </CommandItem>
                    <Separator orientation="vertical" display="flex" minH="6" h="full" />
                  </>
                )}
                <CommandItem
                  onSelect={() => setIsPopoverOpen(false)}
                  flex="1"
                  justifyContent="center"
                  cursor="pointer"
                  maxW="full"
                >
                  Close
                </CommandItem>
              </div>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
